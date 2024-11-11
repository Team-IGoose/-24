import { HashRouter, useRoutes } from "react-router-dom";
import introRoutes from "./introRoutes";

const allRoutes = [...introRoutes];

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
