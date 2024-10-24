import { api } from "../axios/axios"

const resource = "/pokemons"

export interface PokemonType {
    id: number
    name: string
    sprite: string
    spriteShiny: string
    type1: string
    type2: string
    abilityHidden: string
    abilityNormal: string
    atk: number
    def: number
    hp: number
    spatk: number
    spdef: number
    speed: number
}

const getPokemon = async () => {
return await api.get(`${resource}`)
}

export const pokemonApi = {
    getPokemon,
}