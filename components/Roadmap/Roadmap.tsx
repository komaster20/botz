import { Container, Background1, Background2, Bell } from "./styles";
import { TextWithBorder } from "..";
import { Mobile, Desktop } from "../Common/common";
import Image from "next/image";

const Roadmap = () => {

    return (
        <Container>
            <Background1>
                <div style={{ position: "absolute", width: "100%", top: 40 }}>
                    <Desktop>
                        <div style={{ width: 500, height: 170, position: "relative" }}>
                            <Image src="/images/banners/orange_short.png" layout="fill" />
                            <div style={{ position: "absolute", height: 170, marginLeft: -20, display: "flex", alignItems: "center" }}>
                                {/* <TextWithBorder fontSize={80}>
                                    <span>Roadmap</span>
                                </TextWithBorder> */}
                                <Image src="/text/title-04.png" width={450} height={160} />
                            </div>
                        </div>
                    </Desktop>
                    <Mobile>
                        <div style={{ width: 170, height: 80, position: "relative" }}>
                            <Image src="/images/banners/orange_long.png" layout="fill" />
                            <div style={{ position: "absolute", height: 80, marginLeft: -10, display: "flex", alignItems: "center" }}>
                                {/* <TextWithBorder fontSize={32}>
                                    <span>Roadmap</span>
                                </TextWithBorder> */}
                                <Image src="/text/title-04.png" width={200} height={70} />
                            </div>
                        </div>
                    </Mobile>
                </div>
            </Background1>
            <Background2>
                <Bell><Image src="/images/adornments/mobile/school_bell.svg" layout="fill" /></Bell>
                <span style={{ fontSize: "clamp(20px, 2.3vw, 40px)", marginTop: 40 }}>We have a fun school year planned. Here&apos;s what we&apos;re gonna do:</span>
                <ul style={{ listStyle: "disc" }}>
                    <li>Giveaway of 12,000$ USD on day of reveal to whoever mints and holds the rarest token</li>
                    <li>Giveaway of 7,500$ USD on day of reveal to whoever mints and holds the second rarest token</li>
                    <li>Giveaway of $3,500 USD on day of reveal to whoever mints and holds third rarest token</li>
                    <li>Schoolbotz selected at random, raffle-style to come to life and get immortalized in the streets by The HeadMaster Niky Botz</li>
                    <li>Earn $BOTZ by staking your NFTs</li>
                    <li>Private Back to School Party hosted and curated by DJ Zack Bia in LA with many, many special guests</li>
                    <li>Donation to underpriviledged schools once 250 ETH trading volume is reached</li>
                    <li>Donation to underpriviledged schools once 1000 ETH trading volume is reached</li>
                </ul>
            </Background2>
        </Container>
    );
};

export default Roadmap;
