import React from 'react'
import { FullPokemon } from '../../../service/types'
import { StyledDiv } from './SinglePokemonStyle'
import { Link } from 'react-router-dom'
import { addLeadZeros } from '../../../service/service'
type Props = {
    pokemon: FullPokemon | undefined
}

const SinglePokemon: React.FC<Props> = (props) => {

    return (
        <div className='item'>
        <Link to={`/${props.pokemon!.name}`} style={{ textDecoration: 'none' }} >
            <StyledDiv>
                <span className='number'>{`#${addLeadZeros(props.pokemon!.id)}`}</span>
                <img src={props.pokemon!.sprite} alt='pokePhoto' />
                <span id='name'>{props.pokemon!.name}</span>
            </StyledDiv>
        </Link >
        </div>
    );
}

export default SinglePokemon;