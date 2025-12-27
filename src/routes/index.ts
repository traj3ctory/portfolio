import { lazy } from "react";
import { IRoute } from "~/types";

const AppRoutes: IRoute[] = [
  {
    path: "/",
    element: lazy(() => import("~/pages/HomePage")),
  },
];

export default AppRoutes;
