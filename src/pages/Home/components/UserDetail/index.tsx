import { useUsersContext } from "@/context/users.context";
import { memo } from "react";

const UserDetail = () => {
  const { user } = useUsersContext();
  return (
    <aside className="flex gap-5 items-center">
      <img
        src={
          user.avatar_url ??
          "https://i.ibb.co/HLQQ0RJN/free-user-icon-3296-thumb.png"
        }
        className="w-30 h-30 rounded-full"
        alt=""
      />

      {user.login ? (
        <div>
          <h1 className=" text-3xl font-semibold">{user.name}</h1>
          <p>
            <b>@{user.login}</b> - {user.bio || "Não informado"}
          </p>
          <span className="flex gap-2">
            <p>
              <b>Seguidores:</b> {user.followers || "Não informado"}
            </p>{" "}
            |{" "}
            <p>
              <b>Seguindo:</b> {user.following || "Não informado"}
            </p>
          </span>
          <p></p>
          <p>
            <b>E-mail:</b> {user.email || "Não informado"}
          </p>
        </div>
      ) : (
        <h1 className="font-thin">Para continuar, pesquise por um usuário</h1>
      )}
    </aside>
  );
};

export default memo(UserDetail);
