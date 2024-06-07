import Main from "pages/Main";
import Payment from "pages/Payment";
import Schedule from "pages/Schedule";
import Achievements from "pages/Achievements";
import Login from "pages/Auth/Login";
import PrivateRoute from "./PrivateRoute";
import ProtectedRoute from "./ProtectedRoute";

export const basicPaths = [
    {
        path: "/",
        id: 1,
        element: (
            <PrivateRoute>
                <Main />
            </PrivateRoute>
        ),
    },
    {
        path: "schedule",
        id: 2,
        element: (
            <PrivateRoute>
                <Schedule />
            </PrivateRoute>
        )
    },
    {
        path: "payment",
        id: 3,
        element: (
            <PrivateRoute>
                <Payment />
            </PrivateRoute>
        ),
    },
    {
        path: "achievements",
        id: 4,
        element: (
            <PrivateRoute>
                <Achievements />
            </PrivateRoute>
        ),
    },
    {
        path: "login",
        id: 5,
        element: <ProtectedRoute>
            <Login />
        </ProtectedRoute>,
    },
]