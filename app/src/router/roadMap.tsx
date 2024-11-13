import { RouteObject } from "react-router-dom";
import RoadMap from "../_domain/roadMap/_roadMap.page";

const roadMapRoutes: RouteObject[] = [
  {
    path: "/roadMap",
    element: <RoadMap />,
  },
];
export default roadMapRoutes;
