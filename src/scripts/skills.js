import Vue from "vue";
import axios from "axios";


const $axios = axios.create({
    baseURL: "https://webdev-api.loftschool.com"
})

const skillsItem = {
    template: "#skills-item",
    props: {
        skill: Object
    },
    mounted() {
        const circle = this.$refs["segment"];
        const dashArray = parseInt(getComputedStyle(circle).getPropertyValue("stroke-dasharray"));
        const persent = (dashArray/100)*(100 - this.skill.percent);
        circle.style.strokeDashoffset = persent;
    }
}

const skillsGroup = {
    template: "#skills-group",
    components: {
        skillsItem
    },
    props: ["skill"]
}

new Vue ({
    el: "#skills-component",
    template: "#skills-list",
    data() {
        return {
            skills: []
        }
    },
    components: {
        skillsGroup
    },

    async created() {
        const { data } = await $axios.get("/categories/255");
        this.skills = data;
    }
})