import Vue from "vue";

const skillsItem = {
    template: "#skills-item",
    props: ["skillName", "skillPers"],
    mounted() {
        const circle = this.$refs["segment"];
        const dashArray = parseInt(getComputedStyle(circle).getPropertyValue("stroke-dasharray"));
        const persent = (dashArray/100)*(100 - this.skillPers);
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

    created() {
        const data = require("../../skills.json");
        this.skills = data;
    }
})