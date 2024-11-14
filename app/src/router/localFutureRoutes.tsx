import { RouteObject } from "react-router-dom";
import LocalFuture1 from "../_domain/localEduProcess/_local.future.page1";

const authRoutes: RouteObject[] = [
  {
    path: "/localEduProcess",
    element: <LocalFuture1 />,
  },
];
export default authRoutes;
