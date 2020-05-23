import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import FAQ from "../views/FAQ.vue";
import Servers from "../views/Servers.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/FAQ",
    name: "FAQ",
    component: FAQ
  },
  {
    path: "/Servers",
    name: "Servers",
    component: Servers
  }
];

const router = new VueRouter({
  routes
});

export default router;
