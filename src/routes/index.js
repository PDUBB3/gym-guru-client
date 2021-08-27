import { Switch } from "react-router-dom";

import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

const Routes = () => {
  return (
    <Switch>
      <PrivateRoutes />
      <PublicRoutes />
    </Switch>
  );
};

export default Routes;
