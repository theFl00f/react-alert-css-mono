import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import routes from "../../../routes/createAlert.routes";

export const CreateAlertNav = () => {
  const location = useLocation();

  return (
    <nav>
      <ul className="flex">
        {routes.map(({ path, label }) => (
          <li key={label}>
            <NavLink to={`${path}${location.search}`}>{label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
