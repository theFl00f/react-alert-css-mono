import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { CreateAlertLayout } from "../../layouts/CreateAlertLayout";
import routes from "../../../routes/createAlert.routes";

const CreateAlert = () => {
  return (
    <CreateAlertLayout>
      <Switch>
        {routes.map(({ path, component, label, exact }) => (
          <Route key={label} path={path} exact={exact} component={component} />
        ))}
        <Route path="/create">
          <Redirect to="/create/palette" />
        </Route>
      </Switch>
    </CreateAlertLayout>
  );
};

export default CreateAlert;
