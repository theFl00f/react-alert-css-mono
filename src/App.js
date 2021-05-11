import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import routes from "./routes/routes";
import { GlobalLayout } from "./views/layouts/GlobalLayout";

function App() {
  return (
    <BrowserRouter>
      <DndProvider backend={HTML5Backend}>
        <GlobalLayout>
          <Route path="/" exact>
            <Redirect to="/create" />
          </Route>
          {routes.map(({ path, component, label, exact }) => (
            <Route
              key={label}
              path={path}
              exact={exact}
              component={component}
            />
          ))}
        </GlobalLayout>
      </DndProvider>
    </BrowserRouter>
  );
}

export default App;
