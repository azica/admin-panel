import { NavLink as RouterLink } from "react-router-dom";
import styled from "styled-components";
import { textDarkColor, violet, violetLight, white } from "styles/colors";
import { circleRoundedRegular } from "styles/fonts";

const NavLink = styled(RouterLink)`
	font-family: ${circleRoundedRegular};
	font-size: 16px;
	line-height: 21px;
	text-decoration: none;
	color: ${textDarkColor};
	display: flex;
	align-items: center;
	height: 44px;
	padding: 0 0 0 44px;
	gap: 8px;
	position: relative;
	transition: all 0.25s ease-in-out;

	&:hover {
		color: ${white};
		background: ${violetLight};
		border-bottom-right-radius: 30px;
		border-top-right-radius: 30px;
		svg {
			color: ${white};
		}
	}

	&.active {
		background: ${violet};
		border-bottom-right-radius: 30px;
		border-top-right-radius: 30px;
		color: ${white};
		svg {
			color: ${white};
		}
	}

	svg {
		width: 24px;
		height: 24px;
		color: ${textDarkColor};
		transform: translateY(-3px);
		transition: all 0.25s ease-in-out;
	}
`;

export { NavLink };
