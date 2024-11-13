import { RouteObject } from "react-router-dom";
import Test from "../_domain/test/test";

const testRoutes: RouteObject[] = [
  {
    path: "/test",
    element: <Test />,
  },
];
export default testRoutes;
