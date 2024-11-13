import { RouteObject } from "react-router-dom";
import AuthType from "../_domain/auth/_auth.type.page";
import AuthPersonal from "../_domain/auth/_auth.personal.page";
import PersonalLogin from "../_domain/auth/_personal.login.page";

const authRoutes: RouteObject[] = [
  {
    path: "/authType",
    element: <AuthType />,
  },
  {
    path: "/authPersonal",
    element: <AuthPersonal />,
  },
  {
    path: "/login",
    element: <PersonalLogin />,
  },
];
export default authRoutes;
