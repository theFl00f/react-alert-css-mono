import { NavLink } from "react-router-dom";
import routes from "./createAlert.routes";

export const CreateAlertNav = () => {
  return (
    <nav>
      <ul>
        {routes.map(({ path, label }) => (
          <li key={label}>
            <NavLink to={path}>{label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
