import { HashRouter, useRoutes } from "react-router-dom";
import introRoutes from "./introRoutes";
import authRoutes from "./authRoutes";
import testRoutes from "./testRoutes";

const allRoutes = [...introRoutes, ...authRoutes, ...testRoutes];

function RoutesComponent(): JSX.Element {
  const routes = useRoutes(allRoutes)!;
  return routes;
}

function AppRouter(): JSX.Element {
  return (
    <HashRouter>
      <RoutesComponent />
    </HashRouter>
  );
}

export default AppRouter;
