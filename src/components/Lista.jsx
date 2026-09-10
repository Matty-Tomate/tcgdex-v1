import Link from "next/link";

export default function Lista({titulo, elementos}) {
    return (
        <div>
            <h2>{titulo}</h2>
            <ul>
                {elementos?.length > 0
                    ? elementos.map(elemento => <li key={elemento.id}><Link href={`/cartas/${elemento.id}`}>{elemento.name}</Link></li>)
                    : <li>Lista vazia</li>
                }
            </ul>
        </div>
    )
}