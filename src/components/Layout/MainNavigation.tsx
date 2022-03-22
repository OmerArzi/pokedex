import React, { ChangeEvent, useEffect, useState } from "react";
import { StyledSection } from "./MainNavigationStyle";
import { mapSinglePokemon } from "../../service/service";
import { Link } from "react-router-dom";
import FullSinglePokemon from "../Pokemon/FullSinglePokemon/FullSinglepokemon";
import { FullPokemon } from "../../service/types";
import SinglePokemon from "../Pokemon/SinglePokemon/SinglePokemon";

const MainNavigation = () => {
    const [pokemonFormattedData, setPokemonFormattedData] = useState<FullPokemon>();
    const [toShow, setToShow] = useState(false);



    return (
        <StyledSection>
            <img src="../../pokedex-logo.png" />
        </StyledSection>
    );
}

export default MainNavigation;