import { z } from "zod";

const loginFormSchema = z.object({
  username: z
    .string()
    .min(1, "Digite um nome de usuário")
    .regex(
      /^[a-zA-Z0-9-]+$/,
      "Somente letras, números e hífens são permitidos"
    ),
});

export default loginFormSchema;
