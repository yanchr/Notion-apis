import axios from 'axios'
import { Client } from '@notionhq/client'

const notion = new Client({ auth: process.env.NOTION_KEY })

const pokeArray = []

async function getPokemon() {
    const start = 1
    const end = 10

    await axios.get(`https://pokeapi.co/api/v2/pokemon/1`)
    .then((poke) => {
        console.log(poke)
    })
    .catch((err) => {
        console.log(err)
    })
}

getPokemon()