import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AtSign } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import loginFormSchema from "@/pages/types/schema/login.schema";
import type { LoginFormTypes } from "@/pages/types/interface/login.schema";
import { useGithubUser } from "../../hooks/useConsultarUsuario";
import { useCallback } from "react";

const FormLogin = () => {
  const { consultarUsuario, isLoadingUsuario } = useGithubUser();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginFormTypes>({
    resolver: zodResolver(loginFormSchema),
  });

  const onSubmit = useCallback(
    ({ username }: LoginFormTypes) => {
      consultarUsuario(username);
    },
    [consultarUsuario]
  );

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
      <div className="relative">
        <AtSign className="absolute left-3 top-1/2 -translate-y-2/5 text-gray-500 w-3 h-3" />
        <Input
          placeholder="Digite o nome do usuário"
          className="pl-8"
          {...register("username")}
        />
      </div>
      <Button
        disabled={isSubmitting}
        className="w-full bg-black text-white hover:bg-gray-900 cursor-pointer font-bold"
      >
        {isLoadingUsuario ? "Pesquisando" : "Pesquisar"}
      </Button>
    </form>
  );
};

export default FormLogin;
