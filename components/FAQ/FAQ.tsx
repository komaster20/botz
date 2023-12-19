import { AccordionItem, Box, Container, Heading, theme, Accordion } from "../ui";
import Image from "next/image";
import { Mobile, Desktop } from "../Common/common";

const content = [
    {
        title: "When does the sale start?",
        text:
            "Presale begins late March, 2022. For updates, check our Discord.",
    },
    {
        title: "Whitelist info?",
        text:
            "To win a whitelist spot, participate in our community and be active on Discord. Outstanding creative efforts, completing challenges, and contributing ideas/time to building the community will be rewarded!",
    },
    {
        title: "When will we be able to stake?",
        text:
            "Staking will begin approximately four weeks post-reveal. All staking, claiming tokens, and minigames will be hosted through our website.",
    },
];

const FAQ = () => {

    return (
        <Container>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: -60 }}>
                <span style={{ fontSize: "calc(2rem + 5vw)" }}>FAQ</span>
                <Mobile><Image src="/images/adornments/mobile/faq.svg" width={79} height={79} /></Mobile>
                <Desktop style={{ marginTop: -40 }}><Image src="/images/adornments/mobile/faq.svg" width={267} height={267} /></Desktop>
            </div>
            <Accordion>
                <Box>
                    {content.map((item, id) => (
                        <AccordionItem key={id} content={item} />
                    ))}
                </Box>
            </Accordion>
        </Container>
    )
}

export default FAQ;