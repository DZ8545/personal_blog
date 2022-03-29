import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Cover from "../views/cover/Cover.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "cover",
    component: Cover,
  },
  {
    path: "/main",
    name: "main",
    component: () => import("../views/main/Main.vue"),
    children: [
      {
        path: "/main",
        name: "home",
        component: () => import("../views/main/cpms/Home.vue"),
      },
      {
        path: "/main/articles/:id",
        name: "article",
        component: () => import("../views/main/cpms/Article.vue"),
      },
      {
        path: "knowledgeSummary",
        name: "knowledgeSummary",
        component: () => import("../views/main/cpms/KnowledgeSummary.vue"),
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
