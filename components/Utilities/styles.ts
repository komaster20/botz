import styled from "styled-components";
import { FlexCenter } from "../Common/common";

export const Container = styled.div`
    width: 100%;
    flex-flow: column nowrap;
`

export const Background1 = styled(FlexCenter)`
    width: 100%;
    height: max(760px, 80vh);
    position: relative;

    background: url("/backgrounds/desktop/bg-5.png");
    background-size: max(1400px,100%) max(900px, 110%);
    background-position: bottom;
    background-repeat: no-repeat;

    @media(max-width: ${props => props.theme.xs_width}) {
        background: url("/backgrounds/mobile/bg-5.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100% 112%;
        height: 519px;
    }
`

export const Background2 = styled.div`
    width: 100%;
    height: calc(400px + 15vw);
    position: relative;
    margin-top: -30px;
    padding: 0 6%;
    font-size: 18px;
    line-height: 1.5;

    background: url("/backgrounds/desktop/bg-6.png");
    background-size: max(1400px,100%) max(900px, 110%);
    background-position: bottom;
    background-repeat: no-repeat;

    display: flex;
    flex-flow: column nowrap;
    justify-content: start;
    text-align: left;

    font-size: clamp(16px, 2.2vw, 30px);

    @media(max-width: ${props => props.theme.xs_width}) {
        background: url("/backgrounds/mobile/bg-6.png");
        background-repeat: no-repeat;
        background-position: center;

        margin-top: 0;
        height: 500px;
    }

    box-shadow: inset 0px 5px 10px gray, inset 0px -5px 10px gray;
`
export const Guy = styled.div`
    width: 227px;
    height: 230.26px;

    position: absolute;
    right: 80px;
    bottom: 20px;

    transform: rotate(-10deg);
    @media(max-width: ${props => props.theme.xs_width}) {
        width: 113.5px;
        height: 115.13px;
        right: 40px;

        transform: none;
    }
    
`

export const TestTube = styled.div`
    width: 68px;
    height: 136px;

    transform: rotate(-10deg);
    @media(max-width: ${props => props.theme.xs_width}) {
        display: none;
    }

    position: absolute;
    right: -15px;
    top: -30px;
`
