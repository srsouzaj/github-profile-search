import { useMutation } from "@tanstack/react-query";
import Services from "@/services";
import { toast } from "sonner";
import { useUsersContext } from "@/context/users.context";

export const useGithubUser = () => {
  const { handleLoggerUser } = useUsersContext();
  const { users } = Services();

  const { mutate, isPending } = useMutation({
    mutationFn: async (userId: string) => users.consultarUsuarioById(userId),
    onSuccess: (data) => {
      handleLoggerUser(data);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { consultarUsuario: mutate, isLoadingUsuario: isPending };
};
