import { createBrowserRouter } from "react-router";
import { featureRoutes } from "@routes";
import { AppProvider } from "@providers";
import { AppLayout } from "@layouts";

export const appRoutes = createBrowserRouter([
    {
        element: <AppProvider />,
        children: [
            {
                path: "/",
                element: <AppLayout />,
                children: featureRoutes,
            },
        ],
    },
]);