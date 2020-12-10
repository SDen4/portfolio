import Vue from "vue";
import axios from "axios";

const $axios = axios.create({
    baseURL: "https://webdev-api.loftschool.com"
})


const buttons = {
    template: "#projects-slider-buttons",
}

const preview = {
    template: "#projects-slider-preview",
    props: ["projects", "currentProject"]
}

const display = {
    template: "#projects-slider-display",
    components: {
        buttons,
        preview
    },
    props: ["projects", "currentProject", "currentIndex"]
}

const tools = {
    template: "#projects-slider-tools",
    props: ["currentProject"]
}

const info = {
    template: "#projects-slider-info",
    components: {
        tools
    },
    props: ["currentProject", "projects", "currentIndex"],
    computed: {
        toolsArray() {
            return this.project.techs.split(', ');
        }
    }
}


new Vue({
    el: "#projects-component",
    template: "#projects-slider",
    components: {
        display,
        info
    },
    data() {
        return {
            projects: [],
            currentIndex: 0
        };
    },
    computed: {
        currentProject() {
            return this.projects[this.currentIndex];
        }
    },
    methods: {
        handleSlide(direction) {
            switch (direction) {
                case "next":
                    if (this.currentIndex === this.projects.length - 1) {
                        this.currentIndex = 0;
                        break;
                    } else {
                        this.currentIndex++;
                        break;
                    };
                case "prev":
                    if (this.currentIndex === 0) {
                        this.currentIndex = this.projects.length - 1;
                        break;
                    } else {
                        this.currentIndex--;
                        break;
                    }
            }
        }
    },
    async created() {
        const {
            data
        } = await $axios.get("/works/255");
        let arrayOut = data;
        for (let i = 0; i < arrayOut.length; i++) {
            let objInn = arrayOut[i];
            for (let key in objInn) {
                if (key === "techs") {
                    let techStr = objInn[key];
                    let techArr = techStr.split(",");
                    objInn[key] = techArr;
                };
            };
            arrayOut[i] = objInn;
        };
        this.projects = arrayOut;
    }
});