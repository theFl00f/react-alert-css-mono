import { Palette, AlertBox, Buttons } from ".";

const routes = [
  {
    path: "/palette",
    component: Palette,
    label: "Palette",
    exact: true,
  },
  {
    path: "/alert-box",
    component: AlertBox,
    label: "Alert Box",
    exact: true,
  },
  {
    path: "/buttons",
    component: Buttons,
    label: "Buttons",
    exact: true,
  },
];

export default routes;
