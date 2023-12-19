import styled from "styled-components";
import { FlexCenter } from "../Common/common";

export const Container = styled(FlexCenter)`
    width: 100%;
    height: 700px;
    margin-top: -30px;

    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    background: url("/backgrounds/desktop/bg-10.png");
    background-size: 100% 115%;
    background-position: top;
    background-repeat: no-repeat;

    box-shadow: inset 0px 5px 10px gray, inset 0px -5px 10px gray;

    @media(max-width: ${props => props.theme.small_width}) {
        background: url("/backgrounds/mobile/bg-10.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        height: 840px;
        justify-content: center;

        padding: 150px 0 200px 0;
    }
`
