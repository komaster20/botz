import { Container } from "./styles";
import { MediumHide, MediumShow, Desktop } from "../Common/common";
import { useState } from "react";

export const metamaskConnected = () => {
    //@ts-ignore
    return window.ethereum;
}

const Connect = () => {

    const [connected, setConnected] = useState(false);

    const connectWallet = async () => {
        if (metamaskConnected()) {
            //@ts-ignore
            await window.ethereum.send("eth_requestAccounts");
            console.log("connecting...");
            setConnected(true);
        }
    }

    return (
        <Desktop>
            <MediumHide onClick={connectWallet}>
                <Container><span>{connected ? "Connected" : "Connect Wallet"}</span></Container>
            </MediumHide>
            <MediumShow onClick={connectWallet}>
                <Container style={{ width: 150 }}><span>{connected ? "Connected" : "Connect"}</span></Container>
            </MediumShow>
        </Desktop>
    );
};

export default Connect;
