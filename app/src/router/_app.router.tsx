import { HashRouter, useRoutes } from "react-router-dom";
import introRoutes from "./introRoutes";
import authRoutes from "./authRoutes";
import testRoutes from "./testRoutes";
import localFutureRoutes from "./localFutureRoutes"

const allRoutes = [...introRoutes, ...authRoutes, ...testRoutes, ...localFutureRoutes];

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
