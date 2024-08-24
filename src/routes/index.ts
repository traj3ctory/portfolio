import { IRoute } from "@/types";
import { lazy } from "react";

const AppRoutes: IRoute[] = [
  {
    path: "/",
    element: lazy(() => import("@/pages/HomePage")),
  },
];

export default AppRoutes;
