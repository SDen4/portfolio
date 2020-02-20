import Vue from "vue";

new Vue({
    el: "#nav-footer-component",
    template: "#navlistFooter",
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