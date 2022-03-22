import { Pokemon, expectedPromise, elementType, FullPokemon } from './types'
import { pokemonActions } from '../store/PokemonRedux';


const mapAllPokemon = async (pokemons: expectedPromise) => {
    return Promise.all(pokemons.results.map(async (pokemon: Pokemon) => {
        const response = await fetch(pokemon.url)
        if (!response.ok) {
            throw new Error('Could not reach data base!');
        }
        const data = await response.json();
        return data;

    }));
}

export const fetchAllPokemonData = async (dispatch: ({ }) => void) => {
    const fetchData = async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151');
        if (!response.ok) {
            throw new Error('Could not reach data base!');
        }
        const data = response.json();
        return data;
    };
    try {

        const data = await fetchData();
        const allData = await getAllPokemon(data);

        dispatch(pokemonActions.getData(allData))
    }
    catch (error) {
        console.log(error);
    }
}

export const fetchSinglePokemon = async (userInput: string) => {
    const baseuRL = 'https://pokeapi.co/api/v2/pokemon/';
    let pokeUrl = baseuRL + userInput;
    const response = await fetch(pokeUrl);

    if (!response.ok) {
        throw new Error('Could not reach data base!');
    }
    const data = response.json();
    return data;
};

export const mapSinglePokemon = (pokemon: any) => {
    const types = pokemon.types.map((type: elementType) => type.type.name);
    let totalStats = 0;
    for (let i = 0; i < 5; i++) {
        totalStats += pokemon.stats[i].base_stat
    }
    return {
        name: pokemon.name,
        id: pokemon.id,
        sprite: pokemon.sprites.front_default,
        types: types,
        stats: {
            HP: pokemon.stats[0].base_stat,
            attack: pokemon.stats[1].base_stat,
            defense: pokemon.stats[2].base_stat,
            sp_atk: pokemon.stats[3].base_stat,
            sp_def: pokemon.stats[4].base_stat,
            speed: pokemon.stats[5].base_stat,
            total: totalStats
        }
    }
}

export const mapPokemonsFullData = (action: any) => {

    const pokemonObj = action.payload.allData.map((pokemon: any) => mapSinglePokemon(pokemon));
    return pokemonObj;
}

export const getRelevantAddress = (address: string | null) => {
    const getLocalItem = window.localStorage.getItem('last-batch');
    const initAddress = getLocalItem ? getLocalItem : 'https://pokeapi.co/api/v2/pokemon?limit=12&offset=0';
    const finalAddress = address ? address : initAddress
    return finalAddress;
}

export const getAllPokemon = async (pokemons: expectedPromise) => {
    const pokemonObj = await mapAllPokemon(pokemons);
    return pokemonObj;
};

const fetchAllBasic = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=898&offset=0'
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Could not reach data base!');
    }
    const data = response.json();
    return data;
}

export const allPokemonToLocalStorage = async () => {
    const everyPokemonBasic: expectedPromise = await fetchAllBasic();
    console.log(everyPokemonBasic);

    const everyPokemonFull = await mapAllPokemon(everyPokemonBasic);
    const everyPokemonFormatted = everyPokemonFull.map(pokemon => mapSinglePokemon(pokemon))
    window.localStorage.setItem('all-pokemons', JSON.stringify(everyPokemonFormatted));

}

export const reducePokemons = (pokemons: FullPokemon[] | null, subName: string) => {

    const resArray: FullPokemon[] = [];
    console.log(pokemons);

    pokemons!.forEach(pokemon => {
        const pokeNameNoCaptial = subName.charAt(0).toUpperCase() + subName.slice(1);
        const pokeNameWithCapital = subName.charAt(0).toLowerCase() + subName.slice(1);
        if (pokemon.name.startsWith(pokeNameNoCaptial) || pokemon.name.startsWith(pokeNameWithCapital)) {

            resArray.push(pokemon);
        }
    });
    return resArray;
}

export const addLeadZeros = (idNum: number) => {
    return (idNum).toString().padStart(3, '0');
}