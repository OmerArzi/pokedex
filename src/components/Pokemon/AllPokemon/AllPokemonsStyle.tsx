import styled from "styled-components";
import { globalBrightTextColor, smallerSize } from "../../colors";

export const FramedDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 1%;
    padding-left: 7%;
    padding-right: 7%;
    align-self: center;
    justify-items: center;

    @media only screen and (max-width: ${smallerSize}) {
        grid-template-columns: repeat(1, 1fr);
    }

`

export const StyledButtonSection = styled.section`
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
        margin-bottom: 20px;
        border-radius: 6px;
    }
`