import FormLogin from "../../components/Form";
import DataTable from "./components/DataTable";
import UserDetail from "./components/UserDetail";

export default function Home() {
  return (
    <main className="w-screen text-black h-screen flex py-8 items-center bg-black justify-center">
      <section
        aria-label="Container"
        className="shadow-md shadow-gray-400 container flex flex-col gap-3 bg-gray-100 rounded-2xl p-5"
      >
        <FormLogin />
        <UserDetail />
        <div className="overflow-auto">
          <DataTable />
        </div>
      </section>
    </main>
  );
}
