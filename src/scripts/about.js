import Vue from "vue";
import Flickity from "vue-flickity";

const buttons = {
    template: "#about-slider-buttons",
}

const display = {
    template: "#about-display",
    props: ["feedbacks", "currentFeedback", "currentIndex"]
}

new Vue ({
    el: "#about-component",
    template: "#about-slider",
    components: {
        Flickity,
        buttons,
        display
    },
    data() {
        return {
            feedbacks: [],
            currentIndex: 0,
            flickityOptions: {
                initialIndex: 0,
                prevNextButtons: false,
                pageDots: false,
                wrapAround: true
            }
        }
    },
    computed: {
        currentFeedback() {
            return this.feedbacks[this.currentIndex];
        }
    },
    methods: {
        makeImages(data) {
            return data.map(item => {
                const requiredPic = require(`../images/content/${item.avatar}`);
                item.avatar = requiredPic;
                return item;
            })
        },
        next() {
            this.$refs.flickity.next();
            console.log('next');
        },
        previous() {
            this.$refs.flickity.previous();
            console.log('prev');
        }
    },
    created() {
        const data = require("../../feedbacks.json");
        this.feedbacks = this.makeImages(data);
    }
})