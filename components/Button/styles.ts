import styled from "styled-components";

export const Container = styled.div`
    color: white;
    font-size: 2rem;
    
    cursor: pointer;
    position: relative;

    @media (max-width: ${props => props.theme.small_width}) {
        font-size: 1rem;
        transform: translateX(-30%);
        display: flex;
        justify-content: center;
    }
`

export const Outter = styled.div`
    background-color: #D9630E;
    border-radius: 15px;
    border: 4px solid black;
    color: white;
    width: 100%;
    height: 76px;
    position: absolute;

    display: flex;
    flex-flow: row nowrap;

    @media (max-width: ${props => props.theme.small_width}) {
        height: 50px;
        width: 60%;
        border: 2px solid black;
    }
`

export const Inner = styled.div`
    background-color: #FF740F;
    border-radius: 15px;
    border: 4px solid black;
    color: white;
    height: 56px;
    width: 100%;
    position: absolute;

    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

    @media (max-width: ${props => props.theme.small_width}) {
        height: 40px;
        width: 60%;
        border: 2px solid black;
    }
`