import { RouteObject } from "react-router-dom";
import LocalFuture1 from "../_domain/localEduProcess/_local.future.page1";
import LocalFuture2 from "../_domain/femaleSupport/_local.future.page2";
import LocalFuture3 from "../_domain/localEduInfo/_local.future.page3";
import LocalFuture4 from "../_domain/youthPolicy/_local.future.page4";
import LocalFutureInfo from "../_domain/localFutureInfo/_local.future.info.page";

const authRoutes: RouteObject[] = [
  {
    path: "/localFutureInfo",
    element: <LocalFutureInfo />,
  },
  {
    path: "/localEduProcess",
    element: <LocalFuture1 />,
  },
  {
    path: "/femaleSupport",
    element: <LocalFuture2 />,
  },
  {
    path: "/localEduInfo",
    element: <LocalFuture3 />,
  },
  {
    path: "/youthPolicy",
    element: <LocalFuture4 />,
  },
];
export default authRoutes;
