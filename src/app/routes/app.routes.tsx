import { createBrowserRouter } from "react-router";
import { AppProvider } from "@providers";
import { authRoutes, featureRoutes } from "@routes";
import { AppLayout } from "@layouts";
import { AuthLayout } from "@features";

export const appRoutes = createBrowserRouter([
    {
        path: "/",
        element: <AppProvider />,
        children: [
            {
                index: true,
                element: "LandingPage"
            },
            {
                path: "/",
                children: featureRoutes,
                element: <AppLayout />
            },
            {
                path: "/auth",
                children: authRoutes,
                element: <AuthLayout />
            }
        ]
    }
]);