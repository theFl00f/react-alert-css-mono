import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes/routes";

export const Nav = () => {
  return (
    <nav>
      <ul className="flex">
        {routes.map(({ path, label }) => (
          <li key={label}>
            <NavLink to={path}>{label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
