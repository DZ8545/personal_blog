import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Cover from "../views/cover/Cover.vue";
import Main from "../views/main/Main.vue";
import Home from "../views/main/cpms/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "cover",
    component: Cover,
  },
  {
    path: "/main",
    name: "main",
    component: Main,
    children: [
      {
        path: "/main",
        name: "home",
        component: Home,
      },
      {
        path: "/main/:id",
        name: "article",
        component: () => import("../views/main/cpms/Article.vue"),
      },
    ],
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
