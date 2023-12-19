import { Container, Background1 } from "./styles";
import { Mobile, MediumHide, MediumShow, Desktop } from "../Common/common";
import Image from "next/image";

const Team = () => {

    return (
        <Container>
            <Background1>
                <div style={{ position: "absolute", width: "100%", top: 40, left: 0 }}>
                    <Desktop>
                        <div style={{ width: 400, height: 170, position: "relative" }}>
                            <Image src="/images/banners/blue_short.png" layout="fill" />
                            <div style={{ position: "absolute", height: 170, marginLeft: -40, display: "flex", alignItems: "center" }}>
                                {/* <TextWithBorder fontSize={80}>
                                    <span>Team</span>
                                </TextWithBorder> */}
                                <Image src="/text/title-05.png" width={400} height={150} />
                            </div>
                        </div>
                    </Desktop>
                    <Mobile>
                        <div style={{ width: 140, height: 80, position: "relative" }}>
                            <Image src="/images/banners/blue_short.png" layout="fill" />
                            <div style={{ position: "absolute", height: 80, marginLeft: -10, display: "flex", alignItems: "center" }}>
                                {/* <TextWithBorder fontSize={32}>
                                    <span>Team</span>
                                </TextWithBorder> */}
                                <Image src="/text/title-05.png" width={200} height={70} />
                            </div>
                        </div>
                    </Mobile>
                </div>

                <MediumShow style={{ margin: 20 }}><Image src="/images/team/1.png" width={129} height={179} /></MediumShow>
                <MediumShow style={{ margin: 20 }}><Image src="/images/team/2.png" width={129} height={179} /></MediumShow>
                <MediumShow style={{ margin: 20 }}><Image src="/images/team/3.png" width={129} height={179} /></MediumShow>
                <MediumShow style={{ margin: 20 }}><Image src="/images/team/4.png" width={129} height={179} /></MediumShow>

                <MediumHide><Image src="/images/team/1.png" width={237} height={328} /></MediumHide>
                <MediumHide><Image src="/images/team/2.png" width={237} height={328} /></MediumHide>
                <MediumHide><Image src="/images/team/3.png" width={237} height={328} /></MediumHide>
                <MediumHide><Image src="/images/team/4.png" width={237} height={328} /></MediumHide>
            </Background1>
        </Container>
    );
};

export default Team;
