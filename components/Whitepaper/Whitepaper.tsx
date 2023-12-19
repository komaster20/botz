import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Container, Container1, Section1, Section2, Section3, Section4, Section5, Section6 } from "./styles";
import Image from "next/image";
const Fade = require("react-reveal/Fade");

export const WhitepaperDesktop = () => {
    return (
        <Container>
            <Header />
            <Section4>
                <Image src="/images/whitepaper/text/desktop/1.png" width={1031} height={190} />
                <Container1>
                    <Fade left duration={500} delay={200}><div style={{ margin: 30 }}><Image src="/images/whitepaper/desktop/1.png" width={424} height={401} /></div></Fade>
                    <Fade left duration={500} delay={200}><div style={{ margin: 30 }}><Image src="/images/whitepaper/desktop/2.png" width={352} height={422} /></div></Fade>
                    <Fade left duration={500} delay={200}><div style={{ margin: 30 }}><Image src="/images/whitepaper/desktop/3.png" width={424} height={368} /></div></Fade>
                    <Fade left duration={500} delay={200}><div style={{ margin: 30 }}><Image src="/images/whitepaper/desktop/4.png" width={352} height={412} /></div></Fade>
                </Container1>
            </Section4>
            <Section5>
                <div style={{ marginLeft: "28%" }}><Image src="/images/whitepaper/text/desktop/2.png" width={722} height={169} /></div>
                <ul style={{ listStyle: "disc", color: "white", width: "70%", position: "absolute", top: "30%", fontSize: "3rem", paddingLeft: "10%" }}>
                    <li>Connect your wallet to THIS website (be cautious of fakes)</li>
                    <li>Click on BOTZ</li>
                    <li>Select the NFT you want to stake</li>
                    <li>Click &quot;Stake!&quot;</li>
                </ul>
            </Section5>
            <Section6>
                <Image src="/images/whitepaper/text/desktop/3.png" width={1200} height={189} />
                <Image src="/images/whitepaper/desktop/construction.png" width={744} height={635} />
                <div style={{ marginTop: 60 }}>
                </div>
            </Section6>
            <div style={{ zIndex: 500, position: "absolute" }}>
                <Footer />
            </div>
        </Container>
    )
}

const Whitepaper = () => {
    return (
        <Container>
            <Header />
            <Section1>
                <Image src="/images/whitepaper/text/mobile/1.png" width={280} height={80} />
                <Fade left duration={500} delay={200}><Image src="/images/whitepaper/1.png" width={345} height={326} /></Fade>
                <Fade left duration={500} delay={200}><Image src="/images/whitepaper/2.png" width={286} height={343} /></Fade>
                <Fade left duration={500} delay={200}><Image src="/images/whitepaper/3.png" width={345} height={299} /></Fade>
                <Fade left duration={500} delay={200}><Image src="/images/whitepaper/4.png" width={286} height={373} /></Fade>
            </Section1>
            <Section2>
                <div style={{ marginLeft: "28%" }}><Image src="/images/whitepaper/text/mobile/2.png" width={270} height={78} /></div>
                <ul style={{ listStyle: "disc", color: "white", width: "70%", position: "absolute", top: "30%", fontSize: "1.1rem", paddingLeft: 50 }}>
                    <li>Connect your wallet to THIS website (be cautious of fakes)</li>
                    <li>Click on BOTZ</li>
                    <li>Select the NFT you want to stake</li>
                    <li>Click &quot;Stake!&quot;</li>
                </ul>
            </Section2>
            <Section3>
                <Image src="/images/whitepaper/text/mobile/3.png" width={350} height={100} />
                <Image src="/images/whitepaper/construction.png" width={424} height={374} />
                <div style={{ paddingLeft: 20 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                        <Image src="/images/whitepaper/disclaimer.png" width={156} height={109} />
                    </div>
                </div>
            </Section3>
            <Footer />
        </Container>
    )
}

export default Whitepaper;
