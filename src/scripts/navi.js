import Vue from "vue";

new Vue({
    el: "#nav-component",
    template: "#navlist",
    data() {
        return {
            navs: []
        }
    },
    created() {
        const data = require("../../navs.json");
        this.navs = data;
    }
});