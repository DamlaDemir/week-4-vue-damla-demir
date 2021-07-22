import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import StarshipList from "../views/StarshipList";
import StarshipDetail from "../views/StarshipDetail";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/starships",
    name: "starships",
    component: StarshipList,
  },
  {
    path: "/starshipDetail/:id",
    name: "starshipDetail",
    component: StarshipDetail,
  },
];

const router = new VueRouter({
  mode: "history",
  linkActiveClass: "active",
  routes,
});

export default router;
