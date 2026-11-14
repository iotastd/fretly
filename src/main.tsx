import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { routes } from "@routes";
import { RouterProvider } from "react-router";

const divRoot = document.getElementById("root")
const root = createRoot(divRoot!);

root.render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);