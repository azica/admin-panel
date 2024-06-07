import { Box } from "@mui/material";
import { Button } from "components/FormElements";
import styled from "styled-components";
import { darkGray, violet } from "styles/colors";

export const Wrapper = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-top: auto;
`

export const LinkButton = styled(Button)`
        padding: 0!important;
        width: auto;
        color: ${darkGray}!important;
        min-width: 100%!important;

        &.active {
            font-size: 24px;
            line-height: 21px;
            color: ${violet}!important;
        }
`