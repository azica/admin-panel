import { Box, Typography, styled } from "@mui/material";
import Gift from "assets/icons/gift.svg";
import { textSecondary, white } from "styles/colors";
import { circleRoundedThin } from "styles/fonts";

export const Wrapper = styled(Box)`
    margin: auto 20px 0 20px;
    padding: 16px;
    position: relative;
    background: ${white};
    border-radius: 15px;
    height: 128px;
    overflow: hidden;

    &:after {
        position: absolute;
        content: "";
        background: url(${Gift}) no-repeat;
        background-size: contain;
        bottom: 0;
        right: 0;
        width: 70px;
        height: 63px;
    }

`
export const Title = styled(Typography)`
   font-size: 18px;
   line-height: 20px;
   color: ${textSecondary};
`
export const Description = styled("p")`
    font-family: ${circleRoundedThin};
    font-size: 10px;
    line-height: 12px;
    color: ${textSecondary};
    margin-bottom: 10px
`