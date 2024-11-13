import { RouteObject } from "react-router-dom";
import AuthType from "../_domain/auth/_auth.type.page";
import AuthPersonal from "../_domain/auth/_auth_personal.page";

const authRoutes: RouteObject[] = [
  {
    path: "/authType",
    element: <AuthType />,
  },
  {
    path: "/authPersonal",
    element: <AuthPersonal />,
  },
];
export default authRoutes;
