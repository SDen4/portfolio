<template lang="pug">
    section.login
        .login__wrapper
            .login__block
                button.login__close
                .login__block_wrapper
                    .login__title Авторизация
                    .login__content
                        form.login__form(@submit.prevent="login")
                            label.login__form-data
                                .login__form-pic.login__form-pic_log
                                .login__form-info
                                    .login__form-name Логин
                                    input.login__form-input(type="text" placeholder="Введите логин" required)
                            label.login__form-data
                                .login__form-pic.login__form-pic_psw
                                .login__form-info
                                    .login__form-name Пароль
                                    input.login__form-input(type="password" placeholder="Введите пароль" required)
                            .login__button
                                button.button__add.button__add_submit.button__login(type="submit")
</template>

<script id="login-admin">
    export default {
        name: 'LoginAdmin'
    };
</script>


<style lang="pcss">
    @import "../styles/admin/*.pcss";
</style>