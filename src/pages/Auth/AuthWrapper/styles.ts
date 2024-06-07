import { Box, styled } from "@mui/material";

export const Wrapper = styled(Box)`
    background: #F5F5F5;
    display: grid; 
    place-items: center;
    height: 100vh;
    padding: 20px;
`

export const Content = styled(Box)`
    max-width: 340px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 32px;
`

export const LogoWrap = styled(Box)`
    display: flex;
    margin: auto;
    width: 80px;
    height: 80px;

    svg {
        object-fit: contain;
    }
`

export const LangWrap = styled(Box)`
    
`