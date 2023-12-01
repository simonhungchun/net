import Home from "@/views/home";
const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/discover",
    component: () => import("@/views/discover"),
  },
  {
    path: "/login",
    component: () => import("@/views/login"),
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/mine",
    name: "mine",
    component: () => import("@/views/mine"),
  },
];

export default routes;
