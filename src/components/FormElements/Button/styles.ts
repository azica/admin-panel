import { styled } from "@mui/material/styles";
import { Box, Button } from "@mui/material";
import check from "assets/icons/check.svg";
import { liteGrey, white, black, blue, grey, textDarkColor, violet, violetLight, line, darkBlue } from "styles/colors";
import { circleRoundedRegular } from "styles/fonts";

interface ButtonProps {
	secondary?: string;
	variant: string;
	inside?: string;
	size?: "large" | "small" | "medium"
	fullWidth?: boolean;
	color: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
}

const getSizeStyles = (size: ButtonProps["size"]) => {
	switch (size) {
		case "small":
			return `
				font-size: 12px;
				border-radius: 15px;
				padding: 10px;
			`;
		case "large":
		case "medium":
		default:
			return `
				font-size: 16px;
				border-radius: 30px;
				padding: 10px 30px;
			`;
	}
};

const getColor = (color: ButtonProps["color"]) => {
	switch (color) {
		case "info":
			return `
				background: ${blue};
				color: ${textDarkColor};

				&:hover {
					background: ${violet};
				}
			`;
		case "primary":
			return `
			background: ${violet};
			color: ${white};
			`;

	}
}
const getVariantStyles = (variant: ButtonProps["variant"]) => {
	switch (variant) {
		case "outlined":
			return `
		background: white;
		color: ${textDarkColor};
		border: 1px solid ${violet} !important;

			&:hover: {
				background: white;
				border: 1px solid ${violetLight} !important;
			}

			&.Mui-disabled: {
				border: 1px solid ${line} !important;
				color: ${liteGrey};
				}
			&.Mui-disabled {
				.MuiButton-startIcon {
					stroke: ${liteGrey};
				}
			}

			.MuiButton-startIcon {
				stroke: ${black};
			}
		`
		case "text":
			return `
			background: transparent;
			color: ${darkBlue};
		
		`
	}

};


export const ButtonCustom = styled(Button) <ButtonProps>`
	font-family: ${circleRoundedRegular};
	line-height: 135%;
	letter-spacing: 0;
	font-weight: normal;
	text-transform: none;
	box-Shadow: none !important;
	${({ size }) => getSizeStyles(size)}
	${({ color }) => getColor(color)}
	${({ variant }) => getVariantStyles(variant)}
	${(fullWidth) => fullWidth ? "" : `width: 100%;`}
	
		&.disabled {
			pointer - events: none;
			color: ${grey};
		}
	}
`;

export const Content = styled(Box)`
	display: flex;
	align - items: center;
	position: relative;

	.MuiCircularProgress - root {
		position: absolute;
		right: -30px;
	}
`;

export const ButtomWrapper = styled(Box)`
	display: flex;
	align - items: center;
	position: relative;

	.MuiCircularProgress - root {
		margin - left: 16px;
	}
`;
