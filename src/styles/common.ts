import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { blue, white, grey, textDarkColor } from "styles/colors";
import { circleRoundedBold, circleRoundedRegular } from "styles/fonts";

export const WhiteLayer = styled(Box)`
	position: relative;
	padding: 30px 32px;
	background-color: ${white};
	border-radius: 10px;
	width: 100%;
`;

export const Link = styled(RouterLink)`
	font-family: ${circleRoundedRegular};
	font-size: 16px;
	line-height: 140%;
	color: ${textDarkColor};
	position: relative;
	cursor: pointer;
	text-decoration: none;
	transition: all 0.25s ease-in-out;

	&:hover {
		&::before {
			opacity: 1;
		}
	}
	&::before {
		content: "";
		display: block;
		position: absolute;
		bottom: 1px;
		width: 100%;
		height: 1px;
		background: rgb(35, 95, 243);
		opacity: 0;
		transition: all 0.25s ease-in-out;
	}

	&.button-link {
		padding: 11px 10px;
		background: #f3f6fa;
		border-radius: 8px;
		font-family: ${circleRoundedBold};
		text-decoration: underline;

		&:hover {
			box-shadow: inset 0 0 0 1px ${blue};
		}

		&::before {
			display: none;
		}
	}
`;

export const Text = styled(Box)`
	font-family: ${circleRoundedRegular};
	font-size: 15px;
	line-height: 130%;
	color: ${grey};
`;
