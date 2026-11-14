import type { RouteObject } from "react-router";

export const editorRoutes: RouteObject[] = [
    {
        index: true,
        element: "EditorHomePage",
    },
    {
        path: "./settings",
        element: "EditorLayout",
        children: [
            {
                path: "./",
                element: "EditorSettingsOverviewPage",
            },
            {
                path: "./prefrences",
                element: "EditorPrefrencesSettingsPage",
            },
            {
                path: "./shortcuts",
                element: "EditorShortcutsSettingsPage",
            },
        ],
    },
];