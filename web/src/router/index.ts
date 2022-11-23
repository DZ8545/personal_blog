import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Homepage from "../views/main/Homepage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Homepage",
    component: Homepage,
  },
  {
    path: "/main",
    name: "main",
    component: () => import("../views/main/Main.vue"),
    children: [
      {
        path: "articleType/:type",
        name: "articleType",
        component: () => import("../views/main/cpms/ArtivleType.vue"),
      },
      {
        path: "articles/:id",
        name: "article",
        component: () => import("../views/main/cpms/Article.vue"),
      },
      {
        path: "file",
        name: "file",
        component: () => import("../views/main/cpms/File.vue"),
      },
      {
        path: "messageBoard/:id",
        name: "messageBoard",
        component: () => import("../views/main/cpms/MessageBoard.vue"),
      },
      {
        path: "about/:id",
        name: "about",
        component: () => import("../views/main/cpms/About.vue"),
      },
      {
        path: "friends",
        name: "friends",
        component: () => import("../views/main/cpms/Friends.vue"),
      },
      {
        path: "search/:name",
        name: "search",
        component: () => import("../views/main/cpms/Search.vue"),
      },
      {
        path: "snake",
        name: "snake",
        component: () => import("../views/main/cpms/Snake.vue"),
      },
      {
        path: "sudoku",
        name: "sudoku",
        component: () => import("../views/main/cpms/Sudoku.vue"),
      },
      {
        path: "draw",
        name: "draw",
        component: () => import("../views/main/cpms/Draw.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
