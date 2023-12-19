import { Container, Outter, Inner } from "./styles";
import React from "react";

interface ButtonProps {
    text: string;
    width: number;
    link?: string;
}

const Button = ({ text, width, link = "" }: ButtonProps) => {

    return (
        <Container style={{ width: width }}>
            <div onClick={() => link ? window.location.replace(link) : null}>
                <Outter />
            </div>
            <div onClick={() => link ? window.location.replace(link) : null}>
                <Inner>
                    <p>{text}</p>
                </Inner>
            </div>
        </Container>
    );
};

export default Button;
