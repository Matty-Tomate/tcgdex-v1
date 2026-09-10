'use client'
import { getCarta } from "@/lib/cartas"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function ShowCarta({ params }) {
    const [carta, setCarta] = useState(null)

    async function buscaDados() {
        const { id } = await params
        const data = await getCarta(id)
        setCarta(data)
    }

    useEffect(() => {
        buscaDados()
    }, [])

    const temAtaques = carta?.attacks && carta.attacks.length > 0

    return (
        <div>
            <h2>Detalhes da Carta</h2>
            
            <div className="detalheCarta">
                {carta?.image && (
                    <img 
                        src={`${carta.image}/high.png`} 
                        alt={carta.name} 
                        style={{ width: '220px', borderRadius: '8px', marginBottom: '16px' }} 
                    />
                )}

                <p>
                    <label>Nome: </label>
                    {carta?.name ? carta.name : <span className='carregando'>Carregando...</span>}
                </p>

                <p>
                    <label>Categoria: </label>
                    {carta?.category ? carta.category : <span className='carregando'>Carregando...</span>}
                </p>

                <p>
                    <label>Raridade: </label>
                    {carta?.rarity ? carta.rarity : <span className='carregando'>Carregando...</span>}
                </p>

                <p>
                    <label>Coleção / Set: </label>
                    {carta?.set?.name ? carta.set.name : <span className='carregando'>Carregando...</span>}
                </p>

                {/* Tabela adaptada para os ataques da carta em vez das notas */}
                <table className="tabelaNotas">
                    <thead className="tabelaNotasHeader">
                        <tr>
                            <th>Ataque</th>
                            <th>Custo</th>
                            <th>Dano</th>
                        </tr>
                    </thead>
                    <tbody className="tabelaNotasBody">
                        {carta ? (
                            temAtaques ? (
                                carta.attacks.map((ataque, idx) => (
                                    <tr key={idx}>
                                        <td>{ataque.name}</td>
                                        <td>{ataque.cost ? ataque.cost.join(", ") : "Sem custo"}</td>
                                        <td>{ataque.damage ? ataque.damage : "-"}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={3}>Esta carta não possui ataques.</td>
                                </tr>
                            )
                        ) : (
                            <tr>
                                <td colSpan={3}><span className='carregando'>Carregando...</span></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <br />
            <Link href='/cartas'><button className='voltar'>Voltar</button></Link>
        </div>
    )
}