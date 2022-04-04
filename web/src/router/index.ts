import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Homepage from "../views/main/Homepage.vue";
import Cover from "../views/cover/Cover.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Homepage",
    // redirect: "/main",
    component: Homepage,
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("../views/main/cpms/Home.vue"),
      },
    ],
  },
  {
    path: "/main",
    name: "main",
    component: () => import("../views/main/Main.vue"),
    children: [
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
      {
        path: "studyNote",
        name: "studyNote",
        component: () => import("../views/main/cpms/StudyNote.vue"),
      },
      {
        path: "codeSharing",
        name: "codeSharing",
        component: () => import("../views/main/cpms/CodeSharing.vue"),
      },
      {
        path: "informalEssay",
        name: "informalEssay",
        component: () => import("../views/main/cpms/InformalEssay.vue"),
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
  history: createWebHistory(),
  routes,
});

export default router;
