import { css } from "styled-components";
import {
	CircleRoundedBoldEot,
	CircleRoundedBoldTtf,
	CircleRoundedBoldWoff,
	CircleRoundedRegularEot,
	CircleRoundedRegularTtf,
	CircleRoundedRegularWoff,
	CircleRoundedThinEot,
	CircleRoundedThinTtf,
	CircleRoundedThinWoff
} from "assets/fonts";

export const fonts = css`
	@font-face {
		font-family: "CircleRounded Regular";
		src: url(${CircleRoundedRegularWoff}) format("woff"),
			url(${CircleRoundedRegularTtf}) format("truetype"),
			url(${CircleRoundedRegularEot}) format("embedded-opentype");
		font-weight: normal;
		font-style: normal;
	}

	@font-face {
		font-family: "CircleRounded Bold";
		src: url(${CircleRoundedBoldWoff}) format("woff"),
			url(${CircleRoundedBoldTtf}) format("truetype"),
			url(${CircleRoundedBoldEot}) format("embedded-opentype");
		font-weight: normal;
		font-style: normal;
	}

	@font-face {
		font-family: "CircleRounded Thin";
		src: url(${CircleRoundedThinWoff}) format("woff"),
			url(${CircleRoundedThinTtf}) format("truetype"),
			url(${CircleRoundedThinEot}) format("embedded-opentype");
		font-weight: normal;
		font-style: normal;
	}
`;

export const circleRoundedRegular = `"CircleRounded Regular", sans-serif`;
export const circleRoundedBold = `"CircleRounded Bold", sans-serif`;
export const circleRoundedThin = `"CircleRounded Thin", sans-serif`;