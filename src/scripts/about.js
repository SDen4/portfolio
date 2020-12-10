import Vue from "vue";
import axios from "axios";
import Flickity from "vue-flickity";

const $axios = axios.create({
    baseURL: "https://webdev-api.loftschool.com"
})

new Vue({
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
    async created() {
        const {
            data
        } = await $axios.get("/reviews/255");
        this.feedbacks = data;
    }
})