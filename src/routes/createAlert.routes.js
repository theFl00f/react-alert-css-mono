import AlertBox from "../views/pages/CreateAlert/AlertBox";
import Palette from "../views/pages/CreateAlert/Palette";

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
];

export default routes;
