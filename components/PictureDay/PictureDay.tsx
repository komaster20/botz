import { Container, Background1, Background2, Camera } from "./styles";
import { TextWithBorder, Button } from "..";
import { Mobile, Desktop } from "../Common/common";
import Image from "next/image";
import Link from "next/link";

const PictureDay = () => {

    return (
        <Container>
            <Background1>
                <div style={{ position: "absolute", width: "100%", top: 40 }}>
                    <Desktop style={{ position: "relative" }}>
                        <div style={{ width: "max(850px,75%)", height: 170, position: "relative" }}>
                            <Image src="/images/banners/orange_long.png" layout="fill" />
                            <div style={{ position: "absolute", height: 170, left: 10, display: "flex" }}>
                                <Image src="/text/title-06-lg.png" width={740} height={80} />
                            </div>
                        </div>
                    </Desktop>
                    <Mobile style={{ position: "relative" }}>
                        <Image src="/images/banners/orange_long.png" width={360} height={80} />
                        <div style={{ position: "absolute", height: 80, left: 10, top: 0, display: "flex", alignItems: "center" }}>
                            <div style={{ width: 300, height: 60, position: "relative" }}>
                                <Image src="/text/title-06-sm.png" layout="fill" />
                            </div>
                        </div>
                    </Mobile>
                </div>
            </Background1 >
            <Background2>
                <span style={{ fontSize: "clamp(20px, 2.5vw, 50px)", marginTop: 40 }}>A Note from Headmaster NikyBotz</span>
                <p>Picture Day by NikyBotz is a collection of 6000 randomly generated SchoolBotz, enrolled on the Ethereum Blockchain, and attend Bot Chain High School. Each BCHS attendee is unique and hand-selected by myself, Headmaster NikyBotz.</p>
                <p>Each parent is allowed to enroll up to two SchoolBotz on Enrollment Day, for 0.1 ETH each. Join our Discord to learn more, make new friends, and stay updated.</p>
                <p>Until Enrollment Day, stay bot&#39;n.<br />NikyBotz</p>
                <div style={{ display: "flex", flexFlow: "row nowrap", justifyContent: "space-between" }}>
                    <Button text="Join Discord" width={220} link="https://discord.gg/AqSKxR2VxB" />
                    <Camera><Image src="/images/adornments/mobile/camera.svg" layout="fill" /></Camera>
                </div>
            </Background2>
        </Container >
    );
};

export default PictureDay;
