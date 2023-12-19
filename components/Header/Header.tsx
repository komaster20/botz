import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Socials, LinkContainer, DesktopLink, HideSmall, MobileTitle, Icon, Menu, FlexCenterMediumShow } from "./styles";
import Connect from "../Connect/Connect";
import Modal from "../Modal/modal";
const Fade = require("react-reveal/Fade");

const Header = ({ headerRef }: { headerRef?: React.MutableRefObject<any> }) => {

    const [open, setOpen] = useState(false);

    const links = [
        { name: "Connect Wallet", src: "/images/banners/menu/1.png", w: 226, h: 41, link: "/" },
        { name: "Utility", src: "/images/banners/menu/3.png", w: 120, h: 41, link: "/#utility" },
        { name: "Roadmap", src: "/images/banners/menu/2.png", w: 142, h: 41, link: "/#roadmap" },
        { name: "Team", src: "/images/banners/menu/4.png", w: 100, h: 41, link: "/#team" },
        { name: "Whitepaper", src: "/images/banners/menu/5.png", w: 168, h: 41, link: "/whitepaper" },
    ]

    const getLinks = () => {
        return links.map(({ name, src, w, h, link }, index) => {
            return (
                <div key={index} onClick={() => setOpen(false)} style={{ marginLeft: "auto", cursor: "pointer" }}>
                    <Link href={link}>
                        <div style={{ width: w, height: h, position: "relative", marginTop: 10 }}>
                            <Image src={src} layout="fill" />
                            <div style={{ color: "white", fontSize: 24, position: "absolute", right: name === "Connect Wallet" ? -20 : -10, width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer" }}>
                                <span>{name}</span>
                            </div>
                        </div>
                    </Link>
                </div>
            )
        })
    }

    return (
        <Container ref={headerRef}>
            <LinkContainer>
                <Link href="/" ><DesktopLink>Picture Day</DesktopLink></Link>
                <Link href="/#roadmap" ><DesktopLink>Roadmap</DesktopLink></Link>
                <Link href="/#utility" ><DesktopLink>Utility</DesktopLink></Link>
                <Link href="/#team" ><DesktopLink>Team</DesktopLink></Link >
                <Link href="/whitepaper"><DesktopLink>Whitepaper</DesktopLink></Link>
            </LinkContainer>
            <Socials>
                <HideSmall>
                    <Image src="/icons/opensea.svg" layout="fill" />
                </HideSmall>
                <Icon><Link href="https://twitter.com/picturedaynfts/"><Image src="/icons/twitter.svg" layout="fill" /></Link></Icon>
                <Icon><Link href="https://www.instagram.com/picturedaynfts/"><Image src="/icons/instagram.svg" layout="fill" /></Link></Icon>
                <Icon><Link href="https://discord.gg/AqSKxR2VxB"><Image src="/icons/discord.svg" layout="fill" /></Link></Icon>
            </Socials>
            <MobileTitle>Picture Day</MobileTitle>
            <Menu onClick={() => setOpen(true)}><Image src="/icons/menu.svg" width={38} height={37} /></Menu>
            <FlexCenterMediumShow>
                <Connect />
            </FlexCenterMediumShow>
            {open ?
                <Modal isOpen={open} onClose={() => setOpen(false)} backdrop={false} options={{ top: 80 }} >
                    <Fade top cascade duration={500}>
                        <div style={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            flexFlow: "column nowrap",
                            justifyContent: "end",
                            alignItems: "end"
                        }}>
                            {getLinks()}
                        </div>
                    </Fade>
                </Modal>
                : null}
        </Container>
    );
};

export default Header;
