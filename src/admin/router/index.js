import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./router";
// import routes from "@/router/routes";
// import store from "../store/modules/user.js";
import store from "../store";



Vue.use(VueRouter);

const router = new VueRouter({ routes });

router.beforeEach((to, from, next) => {
    const inPublicRoute = to.matched.some(route => route.meta.public);
    const isUserLoggedIn = store.getters["user/userIsLoggedIn"];
console.log('isUserLoggedIn = ' + isUserLoggedIn);
console.log('inPublicRoute = ' + inPublicRoute);


    if (inPublicRoute === false && isUserLoggedIn === false) {
console.log("!!It works!!!!");

    } else {
console.log("!!!323!!!");
        next();
    }
});

export default router;