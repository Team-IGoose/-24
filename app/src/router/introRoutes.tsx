import { RouteObject } from "react-router-dom";
import Intro from "../_domain/intro/_intro.page";

const introRoutes: RouteObject[] = [
  {
    path: "/intro",
    element: <Intro />,
  },
];
export default introRoutes;
