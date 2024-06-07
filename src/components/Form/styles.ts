import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

interface FormProps {
	layout?: string;
}

export const FormContent = styled(Box)`
	display: flex;
	flex-direction: column;
	gap: 32px;
`;

export const InputsContainer = styled(Box)`
	display: grid;
	grid-template-columns: ${({ layout }: FormProps) =>
		layout ? layout : `repeat(1, 1fr)`};
	gap: 12px;
`;

