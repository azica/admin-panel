import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { textDarkColor } from "styles/colors";

interface ContainerProps {
	width?: number;
	padding?: string;
}

interface TitleProps {
	secondery?: string;
}

export const Container = styled(Box)`
	position: relative;
`;

export const Title = styled(Typography<"h3">)`
	margin-bottom: ${({ secondery }: TitleProps) => (secondery ? "8px" : "24px")};
	text-align: center;
	font-size: 40px;
	line-height: 35px;
	color: ${textDarkColor};
`;

export const Wrapper = styled(Box)`
	gap: 40px;
`;
