import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Main from "../views/main/main.vue";
import CategoryEdit from "../views/category/CategoryEdit.vue";
import CategoryList from "../views/category/CategoryList.vue";
import ArticleEdit from "../views/article/ArticleEdit.vue";
import ArticleList from "../views/article/ArticleList.vue";
import CommentList from "../views/comment/CommentList.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "main",
    component: Main,
    children: [
      {
        path: "/category/create",
        component: CategoryEdit,
      },
      {
        path: "/category/edit/:id",
        component: CategoryEdit,
        props: true,
      },
      {
        path: "/category/list",
        component: CategoryList,
      },
      {
        path: "/article/create",
        component: ArticleEdit,
      },
      {
        path: "/article/edit/:id",
        component: ArticleEdit,
        props: true,
      },
      {
        path: "/article/list",
        component: ArticleList,
      },
      {
        path: "/comment/list",
        component: CommentList,
      },
      {
        path: "/friend/create",
        component: () => import("../views/friend/FriendEdit.vue"),
      },
      {
        path: "/friend/edit/:id",
        component: () => import("../views/friend/FriendEdit.vue"),
        props: true,
      },
      {
        path: "/friend/list",
        component: () => import("../views/friend/FriendList.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
