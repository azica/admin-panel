import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Wrapper } from "./styles";
import { SideMenuLink } from "./SideMenuLink";

interface SideMenuProps {
	list: SideMenuItem[];
	commonPath: string;
}

export const SideMenu = ({ list, commonPath }: SideMenuProps) => {
	const [isActive, setIsActive] = useState<boolean>(false);
	const { pathname } = useLocation();
	console.log(commonPath);

	useEffect(() => {
		setIsActive(pathname === commonPath ? true : false);
	}, [pathname, commonPath]);

	return (
		<Wrapper>
			{list.map(({ id, url, ...other }, index) => (
				<SideMenuLink
					key={id}
					id={id}
					url={`${commonPath === "/" ? url : commonPath + url}`}
					active={index === 0 && isActive}
					{...other}
				/>
			))}
		</Wrapper>
	);
};
