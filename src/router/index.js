import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/homePage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/services",
    name: "services",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/servicePage.vue"),
  },
  
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/contactUsPage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior: function () {
    return {
      x: 0,
      y: 0,
    };
  },
  routes,
});

export default router;
