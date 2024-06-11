import LoginPage from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Dashboard from "../Pages/Dashboard";
const routes = [
    {
        path: "/",
        element: <LoginPage />
    },
    {
        path: "/signup",
        element: <SignUp />
    },
    {
        path: "/dashboard",
        element: <Dashboard />
    }
];

export default routes;