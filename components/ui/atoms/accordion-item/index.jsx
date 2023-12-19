import React, { useEffect, useState, useRef } from "react";

import { useSpring } from "react-spring";
import styled from "styled-components";

import { AnimatedBox } from "../animated-box";
import { Box } from "../box";
import { Flex } from "../flex";

const AccordionHeading = styled(Flex)`
  cursor: pointer;
`;
AccordionHeading.defaultProps = {
  backgroundColor: "bg300",
  justifyContent: "space-between",
  alignItems: "center",
  fontSize: 2,
  fontWeight: 2,
  color: "text100",
  mb: 1,
  p: 1
};

export const AccordionItem = ({ content }) => {
  const [open, setOpen] = useState(false);
  const [contentMaxHeight, setContentMaxHeight] = useState(0);
  const ref = useRef();

  useEffect(() => {
    const calcContentMaxHeight = () => {
      ref && ref.current && setContentMaxHeight(ref.current.scrollHeight);
    };

    calcContentMaxHeight();

    window.addEventListener("resize", () => calcContentMaxHeight());

    return () => window.removeEventListener("resize", calcContentMaxHeight());
  }, [ref, contentMaxHeight]);

  const { scY, y, ...props } = useSpring({
    scY: open ? 1 : 1,
    opacity: open ? 1 : 0,
    maxHeight: open ? `${contentMaxHeight}px` : "0px",
    config: { duration: 300 }
  });

  return (
    <Box style={{ borderRadius: 18, backgroundColor: "white", border: "3px solid black", padding: "0 25px", margin: "40px 0" }}>
      <AccordionHeading onClick={() => setOpen(!open)} >
        <Box style={{ fontSize: "calc(0.8rem + 1.2vw)" }}>{content.title}</Box>
        <div style={{ fontSize: "calc(2rem + 1vw)" }}>{open ? "-" : "+"}</div>
      </AccordionHeading>
      <AnimatedBox
        ref={ref}
        style={{
          overflow: "hidden",
          // transform: y.interpolate(y => `translateY(${y}px)`),
          ...props
        }}
      >
        <Box pb={1} style={{ fontSize: "calc(0.8rem + 0.5vw)", paddingBottom: 30 }}>{content.text}</Box>
      </AnimatedBox>
    </Box>
  );
};
