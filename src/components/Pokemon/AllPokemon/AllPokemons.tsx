import React, { ChangeEvent, useState } from 'react'
import { useEffect } from 'react';
import { fetchPokemon } from '../../../store/PokemonRedux';
import { StyledSection } from "../../Layout/MainNavigationStyle";
import { useDispatch } from 'react-redux';
import { RootStateOrAny, useSelector } from 'react-redux';
import { FullPokemon } from '../../../service/types';
import SinglePokemon from '../SinglePokemon/SinglePokemon';
import { FramedDiv, StyledButtonSection } from './AllPokemonsStyle'
import { fetchSinglePokemon, mapSinglePokemon, reducePokemons } from '../../../service/service';
import FullSinglePokemon from '../FullSinglePokemon/FullSinglepokemon';


const AllPokemons = () => {

    const dispatch = useDispatch();
    const pokemonsData = useSelector((state: RootStateOrAny) => state.data.value);
    const nextPokemon = useSelector((state: RootStateOrAny) => state.data.next);
    const prevPokemon = useSelector((state: RootStateOrAny) => state.data.prev);
    const hasChanged = useSelector((state: RootStateOrAny) => state.data.changed);

    const [userInput, setUserInput] = useState('');
    const [showSingle, setShowSingle] = useState(false);
    const [pokeaArray, setPokeArray] = useState(pokemonsData)

    useEffect(() => {
        const addr = hasChanged ? null : 'https://pokeapi.co/api/v2/pokemon?limit=12&offset=0'
        dispatch(fetchPokemon(addr));
    }, []);

    useEffect(() => { setPokeArray(pokemonsData) }, [showSingle]);

    useEffect(() => {
        setPokeArray(pokemonsData)
        dispatch(fetchPokemon(pokemonsData));
    },
        [pokemonsData]);

    const pokemonMenu = () => {
        return pokeaArray.map((pokemon: FullPokemon) => <SinglePokemon key={pokemon.id} pokemon={pokemon} />);
    }

    const nextClickedHandler = () => {
        dispatch(fetchPokemon(nextPokemon));
        setPokeArray(pokemonsData)
    }

    const prevClickedHandler = () => {
        dispatch(fetchPokemon(prevPokemon));
        setPokeArray(pokemonsData)
    }

    const clickHandler = async () => {
        setShowSingle(true);
        const pokeData = await fetchSinglePokemon(userInput);
        const formattedPokemon: any | FullPokemon = mapSinglePokemon(pokeData);
        setPokeArray([formattedPokemon]);
    }

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setUserInput(e.currentTarget.value);
        let allPokemons: string | null | FullPokemon[] = window.localStorage.getItem('all-pokemons');
        const formattedAllPokemons = allPokemons ? JSON.parse(allPokemons) : '';
        const newArray = reducePokemons(formattedAllPokemons, e.currentTarget.value);
        setPokeArray(newArray)
    }

    return (
        <>
            <StyledSection>
                <input type="text" placeholder="enter a pokemon's name..." onChange={changeHandler} />
                <button type='submit' onClick={clickHandler}>Search</button>
            </StyledSection>
            <FramedDiv>
                {pokemonMenu()}
            </FramedDiv>
            <StyledButtonSection>
                <button onClick={prevClickedHandler}>{`←previous`}</button>
                <button onClick={nextClickedHandler}>{`next→`}</button>
            </StyledButtonSection>
        </>

    );
}

export default AllPokemons;