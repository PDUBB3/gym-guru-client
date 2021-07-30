import { Switch, Route } from "react-router";

import LoginPage from "./pages/LoginPage";

const Routes = () => {
  <Switch>
    <Route exact path="/login">
      <LoginPage />
    </Route>
  </Switch>;
};

export default Routes;
