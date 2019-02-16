import Main from "./components/Main";
import User from "./components/User";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main
  },
  {
    path: "/user",
    name: "user",
    component: User
  }
];

export default routes;