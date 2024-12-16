import { Navigate } from "react-router-dom";
import { Layout } from "../layout";
import { HomePage } from "../pages";

export const AppRouter = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <HomePage/>
            }
        ]
    },
    {
        path: '/*',
        element: <Navigate to="/" />
    }
]