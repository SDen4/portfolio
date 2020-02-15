export default [
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
    },
    {
      path: "/login",
      component: () => import("../components/Login.vue"),
      meta: {
        public: true
      }
    }
  ];

// import Vue from "vue";
// import VueRouter from "vue-router";

// Vue.use(VueRouter);

// import login from '../components/Login.vue';
// import myself from '../components/pages/myself.vue';
// import projects from '../components/pages/projects.vue';
// import about from '../components/pages/about.vue';

// const routes = [
//     {
//         path: '/',
//         component: myself
//     },
//     {
//         path: '/projects',
//         component: projects
//     },
//     {
//         path: '/about',
//         component: about
//     },
//     {
//         path: '/login',
//         component: login
//     }
// ];

// export default new VueRouter({routes});