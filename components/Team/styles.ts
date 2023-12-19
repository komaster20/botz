import styled from "styled-components";
import { FlexCenter } from "../Common/common";
import { Icon } from "../Header/styles";

export const Container = styled.div`
    width: 100%;
    flex-flow: column nowrap;
`

export const Background1 = styled(FlexCenter)`
    width: 100%;
    height: max(760px, 80vh);
    position: relative;
    padding: 200px 50px 25px 50px;

    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    background: url("/backgrounds/desktop/bg-9.png");
    background-size: max(1400px,100%) max(900px, 110%);
    background-position: bottom;
    background-repeat: no-repeat;

    @media(max-width: ${props => props.theme.small_width}) {
        background: url("/backgrounds/mobile/bg-9.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        height: 840px;
        justify-content: center;

        padding: 150px 0 200px 0;
    }
`

export const Footer = styled.div`
    background-color: ${props => props.theme.colors.blue};
    width: 100vw;
    height: 80px;
    margin-top: -30px;
    color: white;

    display: grid;
    grid-template-columns: 170px auto 200px 10px;

    @media (max-width: ${props => props.theme.small_width}) {
        margin-top: 0;
        height: 60px;
    }
`
export const IconContainer = styled(Icon)`
    margin: 5px;
    cursor: pointer;
`
