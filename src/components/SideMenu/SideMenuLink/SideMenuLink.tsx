import { NavLink } from "./styles";

interface ExtendedSideMenuItem extends SideMenuItem {
	active: boolean;
}

export const SideMenuLink = ({
	url,
	title,
	icon,
	state,
	active,
}: ExtendedSideMenuItem) => {
	const Icon = icon;
	console.log("URL:", url);
	return (
		<NavLink to={url} state={state} className={active ? "active" : ""}>
			<Icon />
			{title}
		</NavLink>
	);
};
