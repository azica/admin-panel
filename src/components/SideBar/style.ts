import { Card, styled } from "@mui/material";
import { Link } from "react-router-dom";
import { sidebarBg } from "styles/colors";


export const Wrapper = styled(Card)`
    margin: 24px 50px;
    padding-bottom: 25px;
    background: ${sidebarBg};
    border-radius: 30px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: none;
`;

export const LogoWrapper = styled(Link)`
     display: flex;
     margin: 44px auto;
     width: 148px;
     height: 58px;

`
