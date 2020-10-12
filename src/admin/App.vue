<template lang="pug">
.maincontent
    section.admin
        header.admin__header
            .admin__container.admin__container_header
                .admin__user
                    .ava.ava_admin
                        img.admin__photo(src="~images/content/owner.jpg")
                    .title.title_admin Денис Скрябин
                    .pre-title.pre-title_admin Панель администрирования
                .admin__close
                    a.admin__close-link(@click="logoutUser") Выйти
        .admin__interface
            .admin__nav
                .admin__container.admin__container_nav
                    nav.admin__nav-list
                        router-link.admin__nav-item(exact-active-class="admin__nav-item_active" to="/").admin__nav-link Обо мне
                        router-link.admin__nav-item(exact-active-class="admin__nav-item_active" to="projects").admin__nav-link Работы
                        router-link.admin__nav-item(exact-active-class="admin__nav-item_active" to="about").admin__nav-link Отзывы
            .admin__content
                .admin__container.admin__container_content
                    router-view
</template>

<script>
    import { mapActions } from "vuex";

    export default {
        methods: {
            ...mapActions("user", ["logout"]),
            logoutUser() {
                this.logout();
                this.$router.replace("/login");
            }
        }
    };
</script>

<style lang="postcss">
    @import "../styles/main.pcss";
</style>