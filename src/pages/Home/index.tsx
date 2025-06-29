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
        className={`shadow-md shadow-gray-400 container flex flex-col gap-2 bg-gray-100 rounded-2xl ${
          user.login && "justify-between"
        } p-5`}
      >
        <FormLogin />
        {user.login ? (
          <UserDetail />
        ) : (
          <h1 className="font-light text-center pt-10">
            Para começar, pesquise por um usuário.
          </h1>
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
