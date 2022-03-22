export interface expectedPromise {
    count: number,
    next: string,
    previous: string | null,
    results: Pokemon[],
}

export interface Pokemon {
    name: string,
    url: string
}

export interface FullPokemon {
    name: string,
    id: number,
    sprite: string,
    types: string[],
    stats: {
        HP: number,
        attack: number,
        defense: number,
        sp_atk: number,
        sp_def: number,
        speed: number,
        total: number
    }
    description: string,
    charged: boolean
}


export interface elementType {
    type: {
        name: string,
        url: string
    }
}
export interface PokemonState {
    value: FullPokemon[],
    changed: boolean,
    prev: null | string,
    next: null | string,
    lastSinglePokemonWatched: null | FullPokemon,
}