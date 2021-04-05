import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CreateAlertLayout } from "../../layouts/CreateAlertLayout";
import routes from "./createAlert.routes";

export { default as AlertBox } from "./AlertBox";
export { default as Buttons } from "./Buttons";
export { default as Palette } from "./Palette";

const CreateAlert = () => {
  return (
    <CreateAlertLayout>
      <BrowserRouter basename="/">
        <Switch>
          {routes.map(({ path, component, label }) => (
            <Route key={label} path={path} component={component} />
          ))}
        </Switch>
      </BrowserRouter>
    </CreateAlertLayout>
  );
};

export default CreateAlert;
