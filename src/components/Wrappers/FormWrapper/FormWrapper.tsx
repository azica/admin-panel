import { ReactNode } from "react";

import { Wrapper, Container, Title } from "./styles";

interface FormTemplateProps {
	title: string;
	children: ReactNode;
	link?: string;
	width?: number;
	padding?: string;
}

export const FormWrapper = ({
	title,
	children,
	link,
	width,
	padding,
}: FormTemplateProps) => {
	return (
		<Wrapper>
			{/* {link ? <BackButton link={link} /> : null} */}
			<Container width={width} padding={padding}>
				<Title component='h3' variant='h3' secondery={link}>
					{title} в Sirius Future
				</Title>
				{children}
			</Container>
		</Wrapper>
	);
};
