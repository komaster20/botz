import { Container, Background, OpenSea, Images, Title, ImageContainer, HideSmall, Info, InfoDesktop } from "./styles";
import { Button } from "..";
import Image from "next/image";
const Fade = require("react-reveal/Fade");

const Home = () => {

    return (
        <Container>
            <Background>
                <Title>
                    <Image src="/text/title-01.png" width={600} height={200} />
                </Title>
                <div style={{ position: "absolute", bottom: 100 }}>
                    <Button text="Click to join" width={220} link="https://discord.gg/AqSKxR2VxB" />
                </div>
            </Background>
            <OpenSea>
                <Image src="/text/title-02.png" width={440} height={90} />
                <Images>
                    <Fade left duration={400} delay={200}><ImageContainer><Image src="/images/opensea/1.png" layout="fill" /></ImageContainer></Fade>
                    <Fade left duration={400} delay={200}><ImageContainer><Image src="/images/opensea/2.png" layout="fill" /></ImageContainer></Fade>
                    <Fade left duration={400} delay={200}><ImageContainer><Image src="/images/opensea/3.png" layout="fill" /></ImageContainer></Fade>
                    <Fade left duration={400} delay={200}><HideSmall><Image src="/images/opensea/4.png" layout="fill" /></HideSmall></Fade>
                </Images>
                <Button text="View on OpenSea" width={260} />
            </OpenSea>
            <Info><span>Coming soon!</span></Info>
            <InfoDesktop><span>Coming soon!</span></InfoDesktop>
        </Container>
    );
};

export default Home;
