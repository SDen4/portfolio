import Vue from "vue";

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
    props: ["currentProject"],
    computed: {
        toolsArray() {
            return this.currentProject.skills.split(', ');
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
            // currentProject: {},
            currentIndex: 0
        };
    },
    computed: {
        currentProject() {
            return this.projects[this.currentIndex];
        }
    },
    methods: {
        makeImages(data) {
            return data.map(item => {
                const requiredPic = require(`../images/projects/${item.photo}`);
                item.photo = requiredPic;
                return item;
            })
        },
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
    created() {
        const data = require("../../projects.json");
        this.projects = this.makeImages(data);
    }
});