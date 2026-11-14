import type { RouteObject } from "react-router";
import { editorRoutes } from "@routes";

export const projectRoutes: RouteObject[] = [
    {
        index: true,
        element: "ProjectOverviewPage",
    },
    {
        path: "./edit",
        element: "ProjectEditorProvider",
        children: editorRoutes,
    },
];