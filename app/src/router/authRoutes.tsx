import { RouteObject } from "react-router-dom";
import AuthType from "../_domain/authType/_auth.type.page";
import AuthPersonal from "../_domain/authPersonal/_auth.personal.page";
import PersonalLogin from "../_domain/login/_personal.login.page";

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
