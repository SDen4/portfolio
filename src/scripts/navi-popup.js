import Vue from "vue";

new Vue({
    el: "#navPopupComponent",
    template: "#navlistPopup",
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