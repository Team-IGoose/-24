import { RouteObject } from "react-router-dom";
import LocalInnovation1 from "../_domain/localPledge/_local.innovation.page1";
import LocalInnovationInfo from "../_domain/localInnovationInfo/_local.innovation.info.page";
import LocalInnovation2 from "../_domain/localTourism/_local.innovation.page2";
import LocalInnovation3 from "../_domain/localEnterpriseInfo/_local.innovation.page3";
import LocalInnovation4 from "../_domain/enterpriseSupport/_local.innovation.page4";

const authRoutes: RouteObject[] = [
    {
        path: "/localInnovationInfo",
        element: <LocalInnovationInfo />,
      },
    {
        path: "/localPledge",
        element: <LocalInnovation1 />,
    },
    {
        path: "/localTourism",
        element: <LocalInnovation2 />,
    },
    {
        path: "/localEnterpriseInfo",
        element: <LocalInnovation3 />,
    },
    {
        path: "/enterpriseSupport",
        element: <LocalInnovation4 />,
    },
];
export default authRoutes;
