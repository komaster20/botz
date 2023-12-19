import styled from "styled-components";
import { FlexCenter } from "../Common/common";

export const Container = styled(FlexCenter)`
    width: 100%;
    flex-flow: column nowrap;
    position: relative;
`

export const OpenSea = styled(FlexCenter)`
    width: 100%;
    height: max(600px, 60vh);
    padding: 30px 10%;

    background: url("/backgrounds/desktop/bg-2.png");
    background-size: 100% 100%;
    background-position: top;
    background-repeat: no-repeat;
    flex-flow: column nowrap;
    justify-content: start;

    @media (max-width: ${props => props.theme.xs_width}) {
        background: url("/backgrounds/mobile/bg-2.png");
        background-repeat: no-repeat;
        height: 570px;
        background-size: cover;
    }

    box-shadow: inset 0px 5px 10px gray, inset 0px -5px 10px gray;
`

export const Images = styled(FlexCenter)`
    width: 100%;
    justify-content: space-between;
    margin: 10px 0;

    @media (max-width: ${props => props.theme.small_width}) {
        flex-flow: column nowrap;
    }
`

export const Background = styled(FlexCenter)`
    width: 100%;
    height: max(760px, 80vh);
    margin-top: 70px;
    position: relative;

    background: url("/backgrounds/desktop/bg-1.png");
    background-size: max(1400px,100%) max(900px, 100%);
    background-position: top;
    background-repeat: no-repeat;

    @media (max-width: ${props => props.theme.xs_width}) {
        height: 475px;
        background: url("/backgrounds/mobile/bg-1.png");
        background-size: 100% 107%;
        margin-top: 50px;
    }
`

export const Title = styled.div`
    width: max(300px, 40%);
    text-align: center;
    position: absolute;
    top: 60px;

    @media (max-width: ${props => props.theme.small_width}) {
        top: 40px;
    }
`

export const ImageContainer = styled.div`
    width: 215px;
    height: 235px;
    position: relative;
    margin: 5px 0;

    @media (max-width: ${props => props.theme.small_width}) {
        width: 100px;
        height: 110px;
    }
`

export const HideSmall = styled.div`
    width: 215px;
    height: 235px;
    position: relative;
    margin: 5px 0;
    display: flex;

    @media (max-width: 1000px) {
        display: none;
    }
`
export const Info = styled.div`
    display: none;
    font-size: 38px;
    transform: rotate(-10deg);

    position: absolute;
    bottom: 320px;
    
    @media (max-width: ${props => props.theme.small_width}) {
        display: block;
    }
`
export const InfoDesktop = styled.div`
    font-size: 38px;
    transform: rotate(-10deg);

    position: absolute;
    bottom: 100px;
    right: 15%;

    @media (max-width: ${props => props.theme.md_width}) {
        right: 5%;
    }
    
    @media (max-width: ${props => props.theme.small_width}) {
        display: none;
    }
`
