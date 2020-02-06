import Vue from "vue";


const login = {
    template: "#login-admin",
    data: () => ({
        user: {
            name: "",
            password: ""
        }
    }),
    methods: {
        login() {
            console.log(this.user);
        }
    }
};



new Vue({
    el: "#LoginAdmin",
    template: "#login-admin",
    components: {login}
});