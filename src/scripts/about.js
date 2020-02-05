import Vue from "vue";
import Flickity from "vue-flickity";


new Vue ({
    el: "#about-component",
    template: "#about-slider",
    feedbacks: "feedbacks",
    currentFeedback: "currentFeedback",
    currentIndex: "currentIndex",
    components: {
        Flickity
    },
    data() {
        return {
            feedbacks: [],
            currentIndex: 0,
            flickityOptions: {
                initialIndex: 0,
                prevNextButtons: false,
                pageDots: false,
                wrapAround: true,
                groupCells: '100%',
                cellAlign: 'left'
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
        },
        previous() {
            this.$refs.flickity.previous();
        }
    },
    created() {
        const data = require("../../feedbacks.json");
        this.feedbacks = this.makeImages(data);
    }
})