import AlertBox from "./AlertBox";
import Buttons from "./Buttons";
import Palette from "./Palette";

const routes = [
  {
    path: "/create/palette",
    component: Palette,
    label: "Palette",
    exact: true,
  },
  {
    path: "/create/alert-box",
    component: AlertBox,
    label: "Alert Box",
    exact: true,
  },
  {
    path: "/create/buttons",
    component: Buttons,
    label: "Buttons",
    exact: true,
  },
];

export default routes;
