import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AtSign, Search } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useGithubUser } from "../../hooks/useConsultarUsuario";
import { useCallback } from "react";
import ErrorMessage from "../../../../components/ErrorMessage";
import loginFormSchema from "./types/schema/login.schema";
import type { LoginFormTypes } from "./types/interface/login.schema";

const FormLogin = () => {
  const { consultarUsuario, isLoadingUsuario } = useGithubUser();

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<LoginFormTypes>({
    defaultValues: { username: "" },
    resolver: zodResolver(loginFormSchema),
  });

  const onSubmit = useCallback(
    ({ username }: LoginFormTypes) => {
      consultarUsuario(username);
    },
    [consultarUsuario]
  );

  return (
    <form
      className="flex gap-5 not-lg:gap-1 not-lg:flex-col"
      onSubmit={handleSubmit(onSubmit)}
    >
      <fieldset className="w-4/5 not-lg:w-full">
        <div className="relative pb-1">
          <AtSign className="absolute left-3 top-1/2 -translate-y-2/5 text-gray-500 w-3 h-3" />
          <Input
            placeholder="Digite o nome do usuário"
            className="pl-8"
            {...register("username")}
          />
        </div>
        <ErrorMessage message={errors.username?.message} />
      </fieldset>
      <Button
        disabled={!isValid}
        className="w-1/5 not-lg:w-full bg-black text-white hover:bg-gray-900 cursor-pointer font-bold"
      >
        <Search className="w-3 h-3" />
        {isLoadingUsuario ? "Pesquisando" : "Pesquisar"}
      </Button>
    </form>
  );
};

export default FormLogin;
