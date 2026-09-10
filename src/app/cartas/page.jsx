import Lista from "@/components/Lista"
import { getCartas } from "@/lib/cartas"
import Link from "next/link"

export default async function Cartas(){
    const data = await getCartas()
    return(
        <div>
            <Lista titulo='Cartas do TCG de Pokemon' elementos={data} />
            <Link href='/cartas/deck'><button>Adicionar ao meu deck</button></Link>
        </div>
    )
}