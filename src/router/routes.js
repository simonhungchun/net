import Home from "@/views/home";
import Mine from "@/views/mine";
const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/mine",
    name: "mine",
    component: Mine,
  },
];

export default routes;
