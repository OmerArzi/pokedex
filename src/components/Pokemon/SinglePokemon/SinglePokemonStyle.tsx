import styled from "styled-components";
import { globalBackgroundColor, globalBoxShadow, globalBorderRadius, globalDarkTextColor, globalBrightTextColor } from "../../colors";

export const StyledDiv = styled.div`
    display: grid;
    justify-content: center;
    margin-bottom: 20px;
    width: 150px;
    height: 150px;
    box-shadow: 2px 2px ${globalBoxShadow};
    background-color: ${globalBackgroundColor};
    border-radius: ${globalBorderRadius}px;
    

    & span{
        display: flex;
        justify-content: center;
        align-self: center;
        color: ${globalBrightTextColor};

        &.number{
            justify-content: left;
            text-align: left;
            font-size: x-small;
        }      
    }


`