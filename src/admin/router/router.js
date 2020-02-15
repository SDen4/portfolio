export default [
  {
    path: "/login",
    component: () => import("../components/Login.vue"),
    meta: {
      public: true
    }
  },
  {
    path: "/",
    component: () => import("../components/pages/myself.vue"),
    meta: {
      title: "Блок «Обо мне»"
    }
  },
  {
    path: "/projects",
    component: () => import("../components/pages/projects.vue"),
    meta: {
      title: "Блок «Работы»"
    }
  },
  {
    path: "/about",
    component: () => import("../components/pages/about.vue"),
    meta: {
      title: "Блок «Отзывы»"
    }
  }
];