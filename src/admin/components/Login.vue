<template lang="pug">
    section.login
        .login__wrapper
            .login__block
                button.login__close
                .login__block_wrapper
                    .login__title Авторизация
                    .login__content
                        form.login__form(
                            @submit.prevent="login"
                            :class={blocked: loading}
                        )
                            label.login__form-data
                                .login__form-pic.login__form-pic_log(:class="{'login__form-pic_log_error' : validation.hasError('user.name')}")
                                .login__form-info
                                    .login__form-name Логин
                                    input.login__form-input(v-model="user.name" type="text" placeholder="Введите логин")
                                    div(:class="{form__error : validation.hasError('user.name')}") {{validation.firstError('user.name')}}
                            label.login__form-data
                                .login__form-pic.login__form-pic_psw(:class="{'login__form-pic_psw_error' : validation.hasError('user.password')}")
                                .login__form-info
                                    .login__form-name Пароль
                                    input.login__form-input(v-model="user.password" type="password" placeholder="Введите пароль")
                                    div(:class="{form__error : validation.hasError('user.password')}") {{validation.firstError('user.password')}}
                            .login__button
                                button.button__add.button__add_submit.button__login(
                                    type="submit"
                                    :disabled="loading"
                                )
</template>

<script id="login-admin">
    import axios from "axios";
    import { Validator } from 'simple-vue-validator';

    const baseUrl = "https://webdev-api.loftschool.com";
    const token = localStorage.getItem("token") || "";
    const errorMessage = "Заполните поле";

    axios.defaults.baseURL = baseUrl;
    axios.defaults.headers['Authorization'] = `Bearer ${token}`;


    export default {
        mixins: [require('simple-vue-validator').mixin],
        validators: {
            'user.name'(value) {
                return Validator.value(value).required(errorMessage);
            },
            'user.password'(value) {
                return Validator.value(value).required(errorMessage);
            },
        },
        name: 'LoginAdmin',
        data() {
            return {
                loading: false,
                user: {
                    name: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {
                this.$validate().then(success =>{
                    if(!success) return;

                    this.loading = true;
                    try {
                        axios.post(baseUrl + "/login", this.user).then( response => {
                            const token = response.data.token;
                            localStorage.setItem("token", token);

                            axios.defaults.headers['Authorization'] = `Bearer ${token}`;

                            this.user.name = "";
                            this.user.password = "";

                            this.$router.replace("/");
                        });
                    } catch (error) {
                    } finally {
                        this.loading = false;
                    }
                    this.validation.reset();
                })
            }
        }
    };
</script>

<style lang="pcss">
.blocked {
    opacity: .5;
    filter: grayscale(100%);
    pointer-events: none;
    user-select: none;
}
</style>