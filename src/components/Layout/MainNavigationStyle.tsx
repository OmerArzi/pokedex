import styled from 'styled-components';

export const StyledSection = styled.section`
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    text-align: center;
    
    & img{
        display: initial;
        width: 400px;
        align-self: center;
        justify-items: center;
        margin-bottom: 2%;
    }

    & input{    
        width: 230px;
        padding: 0.35%;
        border-color: #37329a;
        border-radius: 6px;
        background-color: #F7F7F9;
    }

    & button{
        width: 7%;
        padding: 0.35%;
        width: 70px;
        margin: 5px;
        text-align: center;
        background-color: #37329a;
        color: white;
        margin-bottom: 20px;
        border-radius: 6px;
    }
`