import type { RouteObject } from "react-router";
import { projectRoutes, userRoutes } from "@routes";

export const featureRoutes: RouteObject[] = [
    {
        path: "./projects",
        children: projectRoutes,
    },
    {
        path: "./users/:username",
        children: userRoutes,
    }
];