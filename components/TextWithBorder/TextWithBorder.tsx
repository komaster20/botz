import React from "react";
import styled from "styled-components";

interface TextWithBorderProps {
    children: React.ReactElement;
    fontSize: number | string;
}

const Container = styled.div`
    color: white;
    // -webkit-text-stroke: 0.5px black;
    text-shadow: -1.5px -1.5px 0 #000, 0 -1.5px 0 #000, 2px -1.5px 0 #000,
        2px 0 0 #000, 2px 2px 0 #000, 0 2px 0 #000, -1.5px 2px 0 #000,
        -1.5px 0 0 #000;
    font-weight: 900;
    
    @media (max-width: ${props => props.theme.small_width}) {
        // -webkit-text-stroke: 2px black;
    }

`

const TextWithBorder = ({ children, fontSize }: TextWithBorderProps) => {

    return (
        <Container>
            <div style={{ fontSize: fontSize }}>
                {children}
            </div>
        </Container>
    );
};

export default TextWithBorder;
