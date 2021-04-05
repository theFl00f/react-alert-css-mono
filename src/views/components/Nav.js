import React from "react";
import routes from "../../routes";
import { NavLink } from "react-router-dom";

export const Nav = () => {
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
