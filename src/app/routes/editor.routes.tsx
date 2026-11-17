import { EditorMainPage, EditorSettngsLayout } from "@features";
import type { RouteObject } from "react-router";

export const editorRoutes: RouteObject[] = [
    {
        path: "./",
        element: <EditorMainPage />
    },
    {
        path: "./settings",
        element: <EditorSettngsLayout />,
        children: [
            {
                path: "./",
                element: "EditorSettingsOverviewPage"
            }
        ]
    }
];