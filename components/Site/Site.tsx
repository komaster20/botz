import { useState, useEffect, useRef } from "react";
import { Header, Home, PictureDay, Utilities, Roadmap, Team, FAQ, Footer } from "../";
import { Container } from "./styles";

const Site = () => {

    const PictureDayRef = useRef(null);
    const UtilitesRef = useRef(null);
    const RoadmapRef = useRef(null);
    const TeamRef = useRef(null);


    const sectionRefs = [
        { section: "PictureDayRef", ref: PictureDayRef },
        { section: "UtilitesRef", ref: UtilitesRef },
        { section: "RoadmapRef", ref: RoadmapRef },
        { section: "TeamRef", ref: TeamRef },
    ];

    const getDimensions = (ele: HTMLElement) => {
        const { height } = ele.getBoundingClientRect();
        const offsetTop = ele.offsetTop;
        const offsetBottom = offsetTop + height;

        return {
            height,
            offsetTop,
            offsetBottom,
        };
    };

    const [visibleSection, setVisibleSection] = useState("");
    const headerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            //@ts-ignore
            const { height: headerHeight } = getDimensions(headerRef.current);
            const scrollPosition = window.scrollY + headerHeight;

            const selected = sectionRefs.find(({ section, ref }) => {
                const ele = ref.current;
                if (ele) {
                    const { offsetBottom, offsetTop } = getDimensions(ele);
                    return scrollPosition > offsetTop && scrollPosition < offsetBottom;
                }
            });

            console.log(selected);

            if (selected && selected.section !== visibleSection) {
                //@ts-ignore
                setVisibleSection(selected.section);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [visibleSection]);

    return (
        <Container>
            <Header headerRef={headerRef} />
            <a className="anchor" id="home" />
            <Home />
            <a ref={PictureDayRef} className="anchor" id="picture_day" />
            <PictureDay />
            <a ref={UtilitesRef} className="anchor" id="utility" />
            <Utilities />
            <a ref={RoadmapRef} className="anchor" id="roadmap" />
            <Roadmap />
            <a ref={TeamRef} className="anchor" id="team" />
            <Team />
            <a className="anchor" id="faq" />
            <FAQ />
            <Footer />
        </Container>
    );
};

export default Site;
