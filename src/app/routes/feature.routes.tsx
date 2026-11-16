import type { RouteObject } from "react-router";
import { projectRoutes, userRoutes } from "@routes";
import { LandingPage, ProjectListPage } from "@features";

export const featureRoutes: RouteObject[] = [
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "/projects",
        element: <ProjectListPage />,
    },
    {
        path: "/project/:projectId",
        children: projectRoutes,
    },
    {
        path: "/user/:username",
        children: userRoutes,
    },
];