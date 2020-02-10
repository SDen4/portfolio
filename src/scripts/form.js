import Vue from "vue";
import { Validator } from 'simple-vue-validator';

const errorMessage = "Заполните поле";
const errorMessageMail = "Введите e-mail";


new Vue ({
    el: "#form-component",
    template: "#form-container",
    mixins: [require('simple-vue-validator').mixin],
    validators: {
        'user.name'(value) {
            return Validator.value(value).required(errorMessage);
        },
        'user.email'(value) {
            return Validator.value(value).required(errorMessageMail).email(errorMessageMail);
        },
        'user.message'(value) {
            return Validator.value(value).required(errorMessage);
        },
    },
    data() {
        return {
            msgModal: false,
            user: {
                name: "",
                email: "",
                message: ""
            }
        }
    },
    methods: {
        sendMessage() {
            this.$validate().then(success =>{
                if(!success) return;
                try {
                    console.log("Message send!!!")
                    this.msgModal = true;
                    this.user.name = "";
                    this.user.email = "";
                    this.user.message = "";
                } catch (error) {
                };
                this.validation.reset();
            });
        }
    }
});