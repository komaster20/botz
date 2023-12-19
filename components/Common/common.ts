import styled from "styled-components";

export const FlexCenter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Mobile = styled.div`
    display: none;
    
    @media (max-width: ${props => props.theme.small_width}) {
        display: block;
    }
`

export const Desktop = styled.div`
    display: block;

    @media (max-width: ${props => props.theme.small_width}) {
        display: none;
    }
`

export const MediumHide = styled.div`
    display: block;

    @media (max-width: ${props => props.theme.md_width}) {
        display: none;
    }
`

export const MediumShow = styled.div`
    display: none;

    @media (max-width: ${props => props.theme.md_width}) {
        display: block;
    }
`
