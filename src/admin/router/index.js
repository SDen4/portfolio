import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./router";
// import routes from "@/router/routes";
// import store from "../store/modules/user.js";
import { store } from "../store";
import axios from "axios";

const guard = axios.create({
    baseURL: "https://webdev-api.loftschool.com"
})






Vue.use(VueRouter);

const router = new VueRouter({ routes });

router.beforeEach(async (to, from, next) => {
    const inPublicRoute = to.matched.some(route => route.meta.public);
    const isUserLoggedIn = store.getters["user/userIsLoggedIn"];

    if (inPublicRoute === false && isUserLoggedIn === false) {

        const token = localStorage.getItem("token");
        guard.defaults.headers["Authorization"] = `Bearer ${token}`;

        try {

            const response = await guard.get("/user");
            store.commit("user/SET_USER", response.data.user);
            next();

        } catch (error) {

            router.replace("/login");
            localStorage.clear();

        }
    } else {
        next();
    }
});

export default router;