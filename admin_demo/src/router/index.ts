import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/login",
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/login/Login.vue"),
    },
    {
      path: "/main",
      name: "main",
      component: () => import("../views/main/Main.vue"),
      children: [
        {
          path: "/category/create",
          component: () => import("../views/category/CategoryEdit.vue"),
        },
        {
          path: "/category/edit/:id",
          component: () => import("../views/category/CategoryEdit.vue"),
          props: true,
        },
        {
          path: "/category/list",
          component: () => import("../views/category/CategoryList.vue"),
        },
        {
          path: "/article/create",
          component: () => import("../views/article/ArticleEdit.vue"),
        },
        {
          path: "/article/edit/:id",
          component: () => import("../views/article/ArticleEdit.vue"),
          props: true,
        },
        {
          path: "/article/list",
          component: () => import("../views/article/ArticleList.vue"),
        },
        {
          path: "/comment/list",
          component: () => import("../views/comment/CommentList.vue"),
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
        {
          path: "/user/create",
          component: () => import("../views/user/UserEdit.vue"),
        },
        {
          path: "/user/edit/:id",
          component: () => import("../views/user/UserEdit.vue"),
          props: true,
        },
        {
          path: "/user/list",
          component: () => import("../views/user/UserList.vue"),
        },
      ],
    },
  ],
});

router.beforeEach((to, from) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    if (to.name === "login") {
      return "/main";
    }
  } else {
    if (to.name !== "login") {
      return "/login";
    }
  }
});

export default router;
