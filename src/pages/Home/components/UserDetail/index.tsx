import { useUsersContext } from "@/context/users.context";
import { memo } from "react";
import { Link } from "react-router-dom";

const UserDetail = () => {
  const { user } = useUsersContext();

  return (
    <aside className="flex  gap-5 not-lg:gap-2 items-center">
      <img
        src={user.avatar_url}
        loading="lazy"
        className="w-30 h-30 not-lg:w-10 not-lg:h-10 rounded-full"
        alt=""
      />
      <div>
        <h1 className=" text-3xl not-lg:text-xl font-semibold">{user.name}</h1>

        <div className="text-sm not-lg:text-xs text-gray-700">
          <Link
            to={user.html_url}
            target="_blank"
            className="text-gray-500 font-bold"
          >
            @{user.login}
          </Link>{" "}
          -{" "}
          <span>
            <b>E-mail:</b> {user.email || "Não informado"}
          </span>
        </div>

        <span className="flex gap-2 text-sm not-lg:text-xs">
          <p className="text-sm not-lg:text-xs">
            <b>Seguidores:</b>{" "}
            {user.followers.toLocaleString("pt-BR") || "Não informado"}
          </p>
          |
          <p className="text-sm not-lg:text-xs">
            <b>Seguindo:</b>{" "}
            {user.following.toLocaleString("pt-BR") || "Não informado"}
          </p>
        </span>
        <p className="text-sm not-lg:text-xs">
          <b>Bio:</b> {user.bio || "Não informado"}
        </p>
      </div>
    </aside>
  );
};

export default memo(UserDetail);
