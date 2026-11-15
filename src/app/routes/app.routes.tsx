import { createBrowserRouter } from "react-router";
import { featureRoutes } from "@routes";

export const appRoutes = createBrowserRouter([
    {
        element: "AppProvider",
        children: [
            {
                path: "/",
                element: "AppLayout",
                children: featureRoutes,
            },
        ],
    },
]);