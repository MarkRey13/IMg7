import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Dashboard from "../Pages/Dashboard";
import Main from "../Pages/Main";
import Patient from "../Pages/Patient";
import Wards from "../Pages/Wards";
import Others from "../Pages/Others";

const routes = [
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/SignUp",
        element: <SignUp />
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
            {
                index: true,
                element:<Main/>
            },
            {
                path: "patient",
                element: <Patient/>
            },
            {
                path: "wards",
                element: <Wards/>
            },
            {
                path: "others",
                element: <Others/>
            }
        ]
    }
];


export default routes;
