
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { textSecondary } from "styles/colors";

export const Links = styled(Box)`
	display: flex;
	align-items: center;
	width: 100%;
	justify-content: space-between;
	
	div a {
		white-space: nowrap;
		justify-content: flex-start;
		padding-left: 0;
		padding-right: 0;
	}
	div:nth-child(2) a{
		justify-content: flex-end;
	}
`

export const FormContent = styled(Box)`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

export const InputsContainer = styled(Box)`
	display: flex;
	flex-direction: column;
	gap: 22px;
	width: 100%;
`;

export const FormBottom = styled(Box)`
	display: flex;
	flex-direction: column;
	gap: 5px;	
	text-align: center;

	p {
		color: ${textSecondary};
		line-height: 135%;
	}

`

