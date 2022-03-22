import styled from "styled-components";
import { globalBackgroundColor, globalDarkTextColor, globalDarkGrey, globalBrightTextColor, smallerSize } from '../../colors'

export const StyledType = styled.div<{ color: string }>`
    display: flex;
    background-color: ${props => props.color};    
    border-radius: 5px;
    min-height: 20px;
    min-width: 55px;
    margin-left: 3%;
    margin-right: 2%;
    padding: 2px;
    color: white;
    width: auto;
    text-align: center;

    @media only screen and (max-width: ${smallerSize}) {
        border-radius: 5px;
        min-height: 20px;
        min-width: 55px;
    }
`
export const StyledDiv = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 220px;
    float: left;
    background-color: ${globalBackgroundColor};
    color: ${globalDarkTextColor};
    padding: 1%;
    border-right: solid ${globalDarkGrey} 1px;
    margin-right: 8px;

    &.detailed{
        border-right: none;
    }

    & h3{
        margin-bottom: 5%;
        text-align: left;
        color: ${globalBrightTextColor}
    }

    & div {
        display: flex;        
        align-items: center;
        align-self: center;
        
        &.types {
            width: 100%;          
            @media only screen and (max-width: ${smallerSize}) {
                min-width: 190px;
                align-content: center;
                margin-bottom: 10px;
                margin-top: 10px;
            }
        }
    }
    & .desc {
            margin-bottom: 10%;
            margin-bottom: 28px;
        }

    & div {
        display: inline-block;
        width: 60px;
        text-align: center;
        
        &.number{
        text-align: left;
        font-size: x-small;
        font-size: 13px;
        }      
    }

    & img {
        height: 160px;
        margin-left: -10px;
    }

    & p.name{
        margin: 0px;
        font-size: 24px;
        color: ${globalBrightTextColor}
    }

    & ul {
        margin: 0;
        width: 280px;
        margin-right: 4%;
        padding: 0;
        height: 100px;
        list-style: none; 
        text-align: left;
        display: flex; 
        justify-content: flex-start;
        flex-direction: column;
        align-content: flex-start;
        flex-wrap: wrap; 
        margin-bottom: 0px;

        & li { 
        flex-basis: 50%;
        margin-right: 30px;
        width: 32%;
        margin-bottom: -20px;
        }

    }

    @media only screen and (max-width: ${smallerSize}) {
        border-right: none;

        &.detailed{
        border-right: none;
        border-top: solid ${globalDarkGrey} 1px;
        margin-top: 0px;
        min-height: 300px;
        }

        & h3{
            margin-bottom: 0%;
            text-align: center;
            margin-top: 0px;
            color: ${globalBrightTextColor}
        }
        & img {
            height: 160px;
            margin-left: 20px;
        }
        & section {
            display: flex;  
            align-items: center;
            
        }
        & .desc {
             margin-bottom: 10px;
             margin-top: -20px;
        }

        & ul {
            width: 180px;
            height: 100px;
            list-style: none; 
            text-align: center;
            display: grid;
            flex-direction: column;
            flex-wrap: wrap;
            margin-top: -50px;
            margin-left: 4px;

            & li { 
            padding-right: -10px;
            width: 180px;
            flex-basis: 50%;
            margin-bottom: 0px;
            margin-right: 0px;
            }
        }
    }
`