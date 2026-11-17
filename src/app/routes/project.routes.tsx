import { ProjectListPage, ProjectViewPage } from "@features";
import { EditorProvider } from "@providers";
import { editorRoutes } from "./editor.routes";
import type { RouteObject } from "react-router";

export const projectRoutes: RouteObject[] = [
    {
        path: "./",
        element: <ProjectListPage />
    },
    {
        path: "./:projectId",
        children: [
            {
                path: "./",
                element: <ProjectViewPage />
            },
            {
                path: "./edit",
                children: editorRoutes,
                element: <EditorProvider />
            }
        ]
    }
];