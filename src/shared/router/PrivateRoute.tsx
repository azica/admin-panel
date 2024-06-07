import { useDispatch } from "react-redux";
import { getTokensFromStorage } from "shared/helpers/localStorage";
import { useUser } from "shared/store/hooks";
import Redirect from "./Redirect";
import { setUser } from "shared/store/slices/userSlice";


interface Props {
    children: JSX.Element;
}

export const PrivateRoute = ({ children }: Props) => {
    const dispath = useDispatch();
    const user = useUser();
    const token = getTokensFromStorage();

    if (!user || !token) {
        dispath(setUser(null));
        return <Redirect link='/login' />;
    }
    return children;
};

export default PrivateRoute;
