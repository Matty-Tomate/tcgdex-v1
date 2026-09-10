import Link from "next/link";

export default async function Home() {

  return (
    <div>
      <h1>Bem vindo à página de cartas de Pokemon!</h1>
      <Link href='/cartas'><button>Clique aqui para acessar as cartas dos Pokemons</button></Link>
    </div>
  );
}