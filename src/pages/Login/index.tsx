import FormLogin from "../../components/Form";

export default function Login() {
  return (
    <main className="w-screen h-screen flex items-center bg-black justify-center">
      <section
        aria-label="Formulário de busca do GitHub"
        className="shadow-md shadow-gray-400 w-full max-w-md flex flex-col gap-5 bg-gray-100 rounded-2xl p-5"
      >
        <header className="w-full flex justify-center" role="banner">
          <img
            src="https://i.ibb.co/xqNV3JkK/github.png"
            alt="Logo do GitHub Explorer"
            className="block w-40 h-40"
          />
        </header>

        <div className="text-center">
          <h1 className="font-semibold text-3xl text-black">GitHub Explorer</h1>
          <p className="font-light text-md text-black">
            Pesquise por um usuário para começar
          </p>
        </div>

        <FormLogin />
      </section>
    </main>
  );
}
