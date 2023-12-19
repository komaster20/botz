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

    background: url("/backgrounds/desktop/bg-3.png");
    background-size: max(1400px,100%) max(900px, 110%);
    background-position: center;
    background-repeat: no-repeat;

    @media(max-width: ${props => props.theme.xs_width}) {
        background: url("/backgrounds/mobile/bg-3.png");
        background-size: 100% 115%;
        background-repeat: no-repeat;
        background-position: 0 -30px;
        height: 476px;
    }
`

export const Background2 = styled.div`
    width: 100%;
    position: relative;
    margin-top: -25px;
    padding: 0 6% 5% 6%;

    background: url("/backgrounds/desktop/bg-4.png");
    background-size: max(1400px,100%) max(900px, 110%);
    background-position: bottom;
    background-repeat: no-repeat;

    display: flex;
    flex-flow: column nowrap;
    justify-content: start;
    text-align: left;

    font-size: clamp(16px, 2.2vw, 36px);

    @media(max-width: ${props => props.theme.xs_width}) {
        background: url("/backgrounds/mobile/bg-4.png");
        background-repeat: no-repeat;
        background-position: center;
        margin-top: 0;
        height: 500px;
    }

    box-shadow: inset 0px 5px 10px gray, inset 0px -5px 10px gray;
`

export const Camera = styled.div`
    width: 164.24px;
    height: 135.12px;
    transform: rotate(-10deg);
    @media(max-width: ${props => props.theme.xs_width}) {
        display: none;
        // width: 82.12px;
        // height: 67.56px;
    }
`
