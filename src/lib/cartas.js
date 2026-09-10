import TCGdex from "@tcgdex/sdk"

const tcgdex = new TCGdex('pt')

export async function getCartas() {
    return await tcgdex.fetch('cards')
}

export async function getCarta(id) {
    return await tcgdex.fetch('cards', id)
}

// export async function gravaCarta(curso) {
//     await axios.post(urlAPI, curso)
// }

// export async function editaCarta(id, curso) {
//     const url = urlAPI+id
//     await axios.patch(url, curso)
// }

// export async function apagaCarta(id){
//     const url = urlAPI+id
//     await axios.delete(url)
// }
