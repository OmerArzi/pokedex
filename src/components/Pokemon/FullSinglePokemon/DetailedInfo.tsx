import { FullPokemon } from '../../../service/types'
import { StyledDiv } from './BasicInfoStyle';
type Props = {
    pokemon: FullPokemon
}

const DetailedInfo: React.FC<Props> = (props) => {

    const statMapping = () => {
        return Object.entries(props.pokemon.stats).map((stat: [string, number], index: number) => {
            return <li key={index}>{stat[0]}: {stat[1]}</li>
        })
    }

    return (
        <StyledDiv className='detailed'>
            <h3>Description</h3>
            <section className="desc">Details about the pokemon...</section>
            <h3>Stats</h3>
            <section className='stats'></section>
            <ul>{statMapping()}</ul>
        </StyledDiv>
    );
}
export default DetailedInfo;