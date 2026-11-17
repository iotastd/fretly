import { LoginPage, RegisterPage } from "@features";
import type { RouteObject } from "react-router"

export const authRoutes: RouteObject[] = [
    {
        path: "./login",
        element: <LoginPage />
    },
    {
        path: "./register",
        element: <RegisterPage />
    }
];