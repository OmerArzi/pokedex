import { useParams } from "react-router-dom";
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";
import { FullPokemon } from '../../../service/types'
import BasicInfo from "./BasicInfo";
import DetailedInfo from "./DetailedInfo";
import styled from "styled-components";
import { globalBackgroundColor, globalBoxShadow, globalBorderRadius, smallerSize } from "../../colors";
import { updateLastWatched } from "../../../store/PokemonRedux";
import { globalBrightTextColor } from "../../colors";
import { Link } from "react-router-dom";


const PageOrganize = styled.div`
    @media only screen and (max-width: ${smallerSize}){
        display: flex;
        flex-direction: column;
        align-items: center;
    }

`
export const StyledBackButton = styled.section`
    display:flex;
    justify-content: center;
    

    & button{
        width: 7%;
        padding: 0.35%;
        min-width: 7%;
        margin: 5px;
        text-align: center;
        background-color: ${globalBrightTextColor};
        color: white;
        border-radius: 6px;
        
    }

    @media only screen and (max-width: ${smallerSize}) {
        display: flex;
        position: relative;
        justify-content: left;
        margin-top: 620px;

        & button{
        width: 100%;      
        min-width: 7%;
        text-align: center;
        background-color: ${globalBrightTextColor};
        color: white;
        margin-bottom: 20px;
        border-radius: 6px;    
        margin-right: 20px;   
        }
}
`

export const StyledFrame = styled.div`
    min-height: 270px;
    min-width: 440px;
    max-width: 500px;
    padding: 2%;
    margin-left: 30%;
    margin-right: 25%;
    padding-bottom: 0%;
    box-shadow: 2px 2px ${globalBoxShadow};
    background-color: ${globalBackgroundColor};
    border-radius: ${globalBorderRadius}px;

    @media only screen and (max-width: ${smallerSize}) {
        padding-right: 0%;
        padding-left: 0%;
        min-height: 600px;
        min-width: 200px;
        max-width: 200px;
        position: absolute;
        margin: auto;
        display: block;
        left: 50%;
        transform: translate(-50%, 0);
    }
`
export const StyledButton = styled.section`
        position: relative;
        display: grid;
        width: 7%;
        margin-left: 50%;
        margin-right: 50%;
        min-width: 7%;
        margin: 5px;
        text-align: center;
        background-color: ${globalBrightTextColor};
        color: white;
        margin-bottom: 20px;
        border-radius: 6px;
`

const FullSinglePokemon: React.FC = () => {

    const { pokeName } = useParams();
    let allPokemons: string | null | FullPokemon[] = window.localStorage.getItem('all-pokemons');
    const formattedAllPokemons = allPokemons ? JSON.parse(allPokemons) : '';
    let pokeInfo = formattedAllPokemons.find((pokeElement: FullPokemon) => pokeElement.name.toLowerCase() == pokeName?.toLowerCase())
    const dispatch = useDispatch();

    if (pokeInfo) {
        dispatch(updateLastWatched(pokeInfo))
    }
    else {
        const data = window.localStorage.getItem('last-watched');
        pokeInfo = data !== null ? JSON.parse(data) : {};
    }

    return (
        <PageOrganize>
            <StyledFrame>
                <BasicInfo pokemon={pokeInfo} />
                <DetailedInfo pokemon={pokeInfo} />
            </StyledFrame>
            <Link to={'/pokeHome'}><StyledBackButton><button>Return</button></StyledBackButton></Link>
        </PageOrganize>
    );
}

export default FullSinglePokemon;