import styled from "styled-components";
import { FlexCenter } from "../Common/common";

export const Container = styled.div`
    background-color: white;
    overflow-x: hidden;
`;

export const Section1 = styled(FlexCenter)`
    width: 100%;
    height: 1605px;
    position: relative;
    margin-top: 80px;
    padding: 30px 0;

    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;

    background: url("/images/whitepaper/bg-1.png");
    background-size: 100% 100%;
    background-position: bottom;
    background-repeat: no-repeat;
`

export const Section2 = styled(FlexCenter)`
    width: 100%;
    height: 486px;
    position: relative;
    padding: 30px 0;

    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;

    background: url("/images/whitepaper/bg-2.png");
    background-size: 100% 110%;
    background-position: center;
    background-repeat: no-repeat;
`

export const Section3 = styled(FlexCenter)`
    width: 100%;
    height: 716px;
    position: relative;
    padding: 10px 0px;

    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;

    background: url("/images/whitepaper/bg-3.png");
    background-size: 100% 100%;
    background-position: bottom;
    background-repeat: no-repeat;
`

export const Section4 = styled(FlexCenter)`
    width: 100%;
    height: 1440px;
    position: relative;
    margin-top: 80px;
    padding: 30px 0;

    display: flex;
    flex-flow: column nowrap;
    justify-content: start;
    align-items: center;

    background: url("/images/whitepaper/desktop/bg-1.png");
    background-size: 100% 100%;
    background-position: bottom;
    background-repeat: no-repeat;
    box-shadow: inset 0px 5px 10px #525252, inset 0px -5px 10px #525252;
`

export const Section5 = styled(FlexCenter)`
    width: 100%;
    height: 1440px;
    position: relative;
    padding: 30px 0;

    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;

    background: url("/images/whitepaper/desktop/bg-2.png");
    background-size: 100% 110%;
    background-position: center;
    background-repeat: no-repeat;
`

export const Section6 = styled(FlexCenter)`
    width: 100%;
    height: 950px;
    position: relative;
    padding: 10px 0px;

    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;

    background: url("/images/whitepaper/desktop/bg-3.png");
    background-size: 100% 100%;
    background-position: bottom;
    background-repeat: no-repeat;
    box-shadow: inset 0px 5px 10px #525252, inset 0px -5px 10px #525252;
`
export const Container1 = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    
    padding: 0 10%;
    width: 100%;
`;
