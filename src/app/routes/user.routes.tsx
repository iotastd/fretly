import { UserProfileEditPage, UserProfileViewPage, UserSettingsLayout } from "@features";
import type { RouteObject } from "react-router";

export const userRoutes: RouteObject[] = [
    {
        path: "./",
        element: <UserProfileViewPage />
    },
    {
        path: "./edit",
        element: <UserProfileEditPage />
    },
    {
        path: "./settings",
        element: <UserSettingsLayout />,
        children: [
            {
                path: "./",
                element: "UserSettingsOverviewPage"
            }
        ]
    }
];