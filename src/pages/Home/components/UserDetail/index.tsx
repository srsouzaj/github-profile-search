import { useUsersContext } from "@/context/users.context";
import { memo } from "react";
import { Link } from "react-router-dom";

const UserDetail = () => {
  const { user } = useUsersContext();

  return (
    <aside className="flex gap-5 items-center">
      <img src={user.avatar_url} className="w-30 h-30 rounded-full" alt="" />
      <div>
        <h1 className=" text-3xl font-semibold">{user.name}</h1>

        <span className="flex gap-1">
          <Link
            to={user.html_url}
            target="_blank"
            className="flex items-end gap-0.5 text-gray-500 font-bold"
          >
            @{user.login}
          </Link>
          -
          <p>
            <b>Bio:</b> {user.bio || "Não informado"}
          </p>
        </span>
        <span className="flex gap-2">
          <p>
            <b>Seguidores:</b> {user.followers || "Não informado"}
          </p>
          |
          <p>
            <b>Seguindo:</b> {user.following || "Não informado"}
          </p>
        </span>
        <p></p>
        <p>
          <b>E-mail:</b> {user.email || "Não informado"}
        </p>
      </div>
    </aside>
  );
};

export default memo(UserDetail);
