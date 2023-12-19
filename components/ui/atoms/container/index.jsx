import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: -30px;
  padding: 5% 10%;
  
  background: url("/backgrounds/desktop/bg-10.png");
  background-size: 100% 900px;
  background-position: top;
  background-repeat: no-repeat;

  @media (max-width: ${props => props.theme.small_width}) {
    margin-top: -5px;
  }

  box-shadow: inset 0px 5px 10px gray, inset 0px -5px 10px gray;

`;

export const Accordion = styled.div`
  width: 100%;
`

Container.defaultProps = {
  minWidth: 288,
  maxWidth: 1440,
  py: 0,
  px: 3
};
