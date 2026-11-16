import { UserProfilePage } from "@features";
import type { RouteObject } from "react-router";

export const userRoutes: RouteObject[] = [
    {
        index: true,
        element: <UserProfilePage />,
    },
    {
        path: "./edit",
        element: "UserEditPage",
    },
    {
        path: "./settings",
        element: "UserSettingsLayout",
        children: [
            {
                index: true,
                element: "UserSettingsOverview",
            },
            {
                path: "./security",
                element: "UserSettingsSecurity",
            },
            {
                path: "./",
                element: "UserSettingsPrivacy",
            },
            {
                path: "./privacy",
                element: "UserSettingsPrivacy",
            },
        ],
    },
];