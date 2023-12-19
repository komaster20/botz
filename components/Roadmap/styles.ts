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

    background: url("/backgrounds/desktop/bg-7.png");
    background-size: max(1400px,100%) max(900px, 110%);
    background-position: bottom;
    background-repeat: no-repeat;

    @media(max-width: ${props => props.theme.xs_width}) {
        background: url("/backgrounds/mobile/bg-7.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100% 110%;
        height: 594px;
    }
`

export const Background2 = styled.div`
    width: 100%;
    height: calc(450px + 15vw);
    position: relative;
    margin-top: -30px;
    padding: 0 5%;
    line-height: 1.7;

    background: url("/backgrounds/desktop/bg-8.png");
    background-size: max(1400px,100%) max(900px, 110%);
    background-position: bottom;
    background-repeat: no-repeat;

    display: flex;
    flex-flow: column nowrap;
    justify-content: start;
    text-align: left;

    font-size: clamp(16px, 2vw, 30px);

    @media(max-width: ${props => props.theme.xs_width}) {
        background: url("/backgrounds/mobile/bg-8.png");
        background-repeat: no-repeat;
        background-position: bottom;
        background-size: 100% 110%;

        margin-top: 0;
        height: 700px;
    }

    box-shadow: inset 0px 5px 10px gray, inset 0px -5px 10px gray;
`

export const Bell = styled.div`
    width: 127.7px;
    height: 145.6px;

    position: absolute;
    right: 10px;
    bottom: 35px;

    transform: rotate(-10deg);
    @media(max-width: ${props => props.theme.small_width}) {
        display: none;
        // width: 63.85px;
        // height: 72.8px;
    }
`
