import { IconContainer, Footer as F } from "../Team/styles";
import { Socials } from "../Header/styles";
import { FlexCenter } from "../Common/common";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <F>
            <FlexCenter>All Rights Reserved</FlexCenter>
            <div></div>
            <Socials>
                <IconContainer><Image src="/icons/opensea.svg" layout="fill" /></IconContainer>
                <IconContainer><Link href="https://twitter.com/picturedaynfts/"><Image src="/icons/twitter.svg" layout="fill" /></Link></IconContainer>
                <IconContainer><Link href="https://www.instagram.com/picturedaynfts/"><Image src="/icons/instagram.svg" layout="fill" /></Link></IconContainer>
                <IconContainer><Link href="https://discord.gg/XWUB6KnC4V/"><Image src="/icons/discord.svg" layout="fill" /></Link></IconContainer>
            </Socials>
        </F>
    )
};

export default Footer;
