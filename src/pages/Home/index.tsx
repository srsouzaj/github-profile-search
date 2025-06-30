import FormLogin from "./components/Form";
import DataTable from "./components/DataTable";
import UserDetail from "./components/UserDetail";
import { useUsersContext } from "@/context/users.context";

export default function Home() {
  const { user } = useUsersContext();
  return (
    <main className="w-screen text-black h-screen flex py-8 items-center bg-black justify-center">
      <section
        aria-label="Container"
        className={`shadow-md shadow-gray-400 container flex flex-col gap-3 bg-gray-100 rounded-2xl  p-5`}
      >
        <FormLogin />
        {user.login ? (
          <UserDetail />
        ) : (
          <span className=" flex flex-col gap-5 font-light text-sm h-full justify-center items-center">
            <img
              src="https://i.ibb.co/xqNV3JkK/github.png"
              alt="Logo do GitHub Explorer"
              className="block w-40 h-40"
              loading="lazy"
            />
            Para começar, pesquise por um usuário.
          </span>
        )}

        {user?.login && (
          <div className="overflow-auto md:h-[720px] lg:h-[480px]">
            <DataTable />
          </div>
        )}
      </section>
    </main>
  );
}
