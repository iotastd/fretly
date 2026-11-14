import type { RouteObject } from "react-router";
import { projectRoutes, userRoutes } from "@routes";

export const featureRoutes: RouteObject[] = [
    {
        path: "/",
        element: "LandingPage",
    },
    {
        path: "/projects",
        element: "ProjectsPage",
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