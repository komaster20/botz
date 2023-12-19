import styled from "styled-components";

export const FlexCenterMediumShow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: ${props => props.theme.small_width}) {
        display: none;
    }
`;

export const Container = styled.div`
    background-color: ${props => props.theme.colors.blue};
    width: 100vw;
    height: 100px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;

    display: grid;
    grid-template-columns: 56% 22% 22%;

    @media (max-width: ${props => props.theme.xs_width}) {
        grid-template-columns: 40% 40% 20%;
        height: 80px;
        margin-bottom: -20px;
        padding-top: 10px;
    }

    box-shadow: 0px 4px 5px gray;
`

export const Socials = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 5%;

    @media (max-width: ${props => props.theme.small_width}) {
        padding: 0 10%;
    }
`

export const Icon = styled.div`
    width: 46px;
    height: 46px;
    position: relative;
    cursor: pointer;

    @media (max-width: ${props => props.theme.small_width}) {
        width: 36px;
        height: 36px;
    }
`

export const LinkContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;

    @media (max-width: ${props => props.theme.small_width}) {
        display: none;
    }
`

export const DesktopLink = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.colors.text.main};
    font-size: calc(1rem + 0.5vw);
    padding: 0 0%;
    cursor: pointer;
`

export const HideSmall = styled.div`
    display: flex;
    align-items: center;
    width: 46px;
    height: 46px;
    position: relative;
    cursor: pointer;

    @media (max-width: ${props => props.theme.small_width}) {
        display: none;
    }
`
export const MobileTitle = styled.div`
    width: 100%;
    display: none;
    text-align: center;
    color: white;
    font-size: 28px;

    @media (max-width: ${props => props.theme.small_width}) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const Menu = styled.div`
    width: 100%;
    display: none;
    cursor: pointer;

    @media (max-width: ${props => props.theme.small_width}) {
        display: flex;
        align-items: center;
        justify-content: center;
    }

`
