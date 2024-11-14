import { RouteObject } from "react-router-dom";
import LocalInnovation1 from "../_domain/localPledge/_local.innovation.page1";

const authRoutes: RouteObject[] = [
  {
    path: "/localPledge",
    element: <LocalInnovation1 />,
  },
];
export default authRoutes;
