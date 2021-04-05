import { BrowserRouter, Route, Switch } from "react-router-dom";
import routes from "./routes";
import { GlobalLayout } from "./views/layouts/GlobalLayout";

function App() {
  return (
    <BrowserRouter>
      <GlobalLayout>
        <Switch>
          {routes.map(({ path, component, label, exact }) => (
            <Route
              key={label}
              path={path}
              exact={exact}
              component={component}
            />
          ))}
        </Switch>
      </GlobalLayout>
    </BrowserRouter>
  );
}

export default App;
