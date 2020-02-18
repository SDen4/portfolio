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
        buttons, preview
    },
    props: ["projects", "currentProject", "currentIndex"]
}

const tools = {
    template: "#projects-slider-tools",
    props: ["tools"]
}

const info = {
    template: "#projects-slider-info",
    components: {
        tools
    },
    props: ["currentProject", "projects", "currentIndex"],
    computed: {
        toolsArray() {
            // return this.currentProject.skills.split(', ');
            return this.project.techs.split(', ');
        }
    }
}



new Vue ({
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
        // makeImages(data) {
        //     return data.map(item => {
        //         const requiredPic = require(`../images/projects/${item.photo}`);
        //         item.photo = requiredPic;
        //         return item;
        //     })
        // },
        handleSlide(direction) {
            switch(direction) {
                case "next":
                    if(this.currentIndex === this.projects.length-1) {
                        this.currentIndex = 0;
                        break;
                    } else {
                        this.currentIndex++;
                        break;
                    };
                case "prev":
                    if(this.currentIndex === 0) {
                        this.currentIndex = this.projects.length-1;
                        break;
                    } else {
                        this.currentIndex--;
                        break;
                    }
            }
        }
    },
    async created() {
        // const data = require("../../projects.json");
        const { data } = await $axios.get("/works/255");
        console.log(data)

        this.projects = data;
        // this.projects = this.makeImages(data);
    }
});