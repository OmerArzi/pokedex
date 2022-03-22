import { createSlice } from '@reduxjs/toolkit';
import { configureStore } from "@reduxjs/toolkit";
import { PokemonState, FullPokemon } from '../service/types'
import { getAllPokemon, mapPokemonsFullData, getRelevantAddress } from '../service/service'

const initialState: PokemonState = {
    value: [],
    changed: false,
    prev: null,
    next: null,
    lastSinglePokemonWatched: null,
}

export const pokemonSlice = createSlice({
    name: 'pokedex',
    initialState,
    reducers: {
        getData: (state, action) => {
            state.value = mapPokemonsFullData(action);
            state.next = action.payload.next;
            state.prev = action.payload.prev;
            state.changed = true;
            window.localStorage.removeItem('last-batch');
            window.localStorage.setItem('last-batch', JSON.stringify(action.payload.pokemons));
        },
        updateLastPokemonWatched: (state, action) => {
            state.lastSinglePokemonWatched = action.payload.pokemon;
            window.localStorage.removeItem('last-watched');
            window.localStorage.setItem('last-watched', JSON.stringify(action.payload.pokemon));
        },

    }
})


export const updateLastWatched = (pokemon: FullPokemon) => {
    return (dispatch: ({ }) => void) => {
        dispatch(pokemonSlice.actions.updateLastPokemonWatched({ pokemon: pokemon }));
    };
};

export const fetchPokemon = (address: null | string = null) => {
    return async (dispatch: ({ }) => void) => {

        const fetchData = async (currAddress: string) => {

            const response = await fetch(currAddress);
            if (!response.ok) {
                throw new Error('Could not reach data base!');
            }
            const data = response.json();
            return data;
        };

        try {
            const currAddress = getRelevantAddress(address);
            const data = await fetchData(currAddress);
            const allData = await getAllPokemon(data);

            dispatch(pokemonSlice.actions.getData({ allData: allData, next: data.next, prev: data.previous, pokemons: currAddress }))

        }
        catch (error) {
            console.log(error);
        }
    }
};

export const store = configureStore({
    reducer: { data: pokemonSlice.reducer }
});

export const pokemonActions = pokemonSlice.actions;