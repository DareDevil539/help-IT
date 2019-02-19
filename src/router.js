import Vue from "vue";
import VueRouter from "vue-router";
import Main from "./components/Main";
import User from "./components/User";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "main",
      component: Main
    },
    {
      path: "/welcome.view",
      name: "main",
      component: Main
    },
    {
      path: "/user.view",
      name: "user",
      component: User
    }
  ]
});
