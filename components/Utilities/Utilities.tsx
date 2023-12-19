import { Container, Background1, Background2, Guy, TestTube } from "./styles";
import { Button } from "..";
import { Mobile, Desktop } from "../Common/common";
import Image from "next/image";
import Link from "next/link";

const Utilities = () => {

    const style = {
        display: "flex", flexFlow: "row nowrap", justifyContent: "start", marginLeft: "calc(-50px + 3vw)",
    };

    return (
        <Container>
            <Background1 style={{ zIndex: 1 }}>
                <div style={{ position: "absolute", width: "100%", top: 40 }}>
                    <Desktop>
                        <div style={{ width: 500, height: 170, position: "relative" }}>
                            <Image src="/images/banners/blue_short.png" layout="fill" />
                            <div style={{ position: "absolute", height: 170, marginLeft: -80, display: "flex", alignItems: "center" }}>
                                {/* <TextWithBorder fontSize={80}>
                                    <span>Utilities</span>
                                </TextWithBorder> */}
                                <Image src="/text/title-03.png" width={500} height={150} />
                            </div>
                        </div>
                    </Desktop>
                    <Mobile>
                        <div style={{ width: 165, height: 80, position: "relative" }}>
                            <Image src="/images/banners/blue_short.png" layout="fill" />
                            <div style={{ position: "absolute", height: 80, marginLeft: -30, display: "flex", alignItems: "center" }}>
                                {/* <TextWithBorder fontSize={32}>
                                    <span>Utilities</span>
                                </TextWithBorder> */}
                                <Image src="/text/title-03.png" width={300} height={90} />
                            </div>
                        </div>
                    </Mobile>
                </div>
            </Background1>
            <Background2>
                <TestTube><Image src="/images/adornments/mobile/test_tube.svg" layout="fill" /></TestTube>
                <span style={{ fontSize: "clamp(20px, 2.5vw, 40px)", marginTop: 40 }}>Each attendee comes with the following utilities:</span>
                <span>
                    <ul style={{ listStyle: "disc" }}>
                        <li>Each attendee comes with an internal school clock monitored by The Headmaster. The clock has milestones that will notify the Headmaster of how long you’ve been holding. Holding makes you eligible for some very special rewards</li>
                        <li>Stake your NFT to generate $BOTZ, which can be used to enter raffles, wager on minigames, buy merch, and mint new NFTs</li>
                    </ul>
                </span>
                <p>Wanna learn more?</p>
                <div style={style}>
                    <Link href="/whitepaper"><div><Button text="Whitepaper" width={200} /></div></Link>
                    <Guy><Image src="/images/adornments/mobile/janitor.png" width={209} height={212} /></Guy>
                </div>
            </Background2>
        </Container>
    );
};

export default Utilities;
