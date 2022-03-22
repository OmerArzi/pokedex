import { FullPokemon } from '../../../service/types'
import { addLeadZeros } from '../../../service/service'
import { StyledDiv, StyledType } from './BasicInfoStyle'
import { typeColors } from "../../colors";

type Props = {
    pokemon: FullPokemon
}



const BasicInfo: React.FC<Props> = (props) => {

    const mapTypes = () => {
        return props.pokemon.types.map((type, idx) =>
            <StyledType key={idx} color={typeColors[type]}>{`${type}`}</StyledType>)
    }
    return (
        <StyledDiv>
            <div className='number'>{`#${addLeadZeros(props.pokemon.id)}`}</div>
            <img src={props.pokemon.sprite} />
            <p className='name'>{props.pokemon.name}</p>
            <div className='types'>{mapTypes()}</div>
        </StyledDiv>
    );
}

export default BasicInfo;