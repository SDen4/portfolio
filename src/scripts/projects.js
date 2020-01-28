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
                    this.currentIndex++;
                    break;
                case "prev":
                    this.currentIndex--;
                    break;
            }
        },
        sliderLoop(value) {
            const projectsTotalNum = this.projects.lenght - 1;
            if (value > projectsTotalNum) this.currentIndex = 0;
            else if (value < 0) this.currentIndex = projectsTotalNum;
        }
    },
    watch: {
        currentIndex(value) {
            this.sliderLoop(value)
        }
    },
    created() {
        const data = require("../../projects.json");
        this.projects = this.makeImages(data);
        // this.currentProject = this.projects[this.currentIndex];
    }
});