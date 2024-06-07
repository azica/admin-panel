import { ThemeProvider } from "@mui/material";

import { theme } from "styles/theme";

import { layoutStyles } from "./styles";

import { LayoutContent } from "./LayoutContent";
import { useIsMobile } from "hooks/useMobile";
import { Profile } from "components/Profile";
import { SideBar } from "components/SideBar";
import { useUser } from "shared/store/hooks";

const { Container, Wrapper } = layoutStyles;

export const Layout = () => {
	const isMobile = useIsMobile(1020);

	const isAuth = useUser();

	return (
		<ThemeProvider theme={theme}>
			{isAuth ?
				<Wrapper>
					<SideBar />
					<Container>
						<Profile />
						<LayoutContent />
					</Container>
				</Wrapper>
				:
				<Container>
					<LayoutContent auth />
				</Container>
			}
		</ThemeProvider>
	);
};
