import { MouseEvent } from "react";
import { InputAdornment as InputAdornmentMui } from "@mui/material";
import { IconButton } from "./styles";
import { EyeClosedIcon, EyeIcon } from "assets/icons";

interface InputAdornmentProps {
	show: boolean;
	onChange: (val: boolean) => void;
}

const InputAdornment = ({ show, onChange }: InputAdornmentProps) => {
	const handleClickShowPassword = () => onChange(!show);
	const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
	};

	return (
		<InputAdornmentMui position='end'>
			<IconButton
				aria-label='toggle password visibility'
				onClick={handleClickShowPassword}
				onMouseDown={handleMouseDownPassword}
				edge='end'>
				{show ? <EyeClosedIcon /> : <EyeIcon />}
			</IconButton>
		</InputAdornmentMui>
	);
};

export default InputAdornment;
