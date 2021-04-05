import { BrowserRouter, Redirect, Route } from "react-router-dom";
import routes from "./routes";
import { GlobalLayout } from "./views/layouts/GlobalLayout";

function App() {
  return (
    <BrowserRouter>
      <GlobalLayout>
        <Route path="/" exact>
          <Redirect to="/create" />
        </Route>
        {routes.map(({ path, component, label, exact }) => (
          <Route key={label} path={path} exact={exact} component={component} />
        ))}
      </GlobalLayout>
    </BrowserRouter>
  );
}

export default App;
