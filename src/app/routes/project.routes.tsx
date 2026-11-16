import type { RouteObject } from "react-router";
import { editorRoutes } from "@routes";
import { ProjectViewPage } from "@features";
import { EditorProvider } from "@providers";

export const projectRoutes: RouteObject[] = [
    {
        index: true,
        element: <ProjectViewPage />,
    },
    {
        path: "./edit",
        element: <EditorProvider />,
        children: editorRoutes,
    },
];