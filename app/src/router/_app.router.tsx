import { HashRouter, useRoutes } from "react-router-dom";
import introRoutes from "./introRoutes";
import authRoutes from "./authRoutes";

const allRoutes = [...introRoutes, ...authRoutes];

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
