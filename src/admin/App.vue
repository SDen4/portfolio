<template lang="pug">
.maincontent
    section.admin
        header.admin__header
            .admin__container.admin__container_header
                .admin__user
                    .ava.ava_admin
                        img.admin__photo(src="~images/content/owner.jpeg")
                    .title.title_admin Денис Скрябин
                    .pre-title.pre-title_admin Панель администрирования
                .admin__close
                    a.admin__close-link Выйти
        .admin__interface
            .admin__nav
                .admin__container.admin__container_nav
                    ul.admin__nav-list
                        li.admin__nav-item
                            a.admin__nav-link(@clik.prevent href="/admin#/") Обо мне
                            //- router-link(exact-active-class="active" to="/admin#/").admin__nav-link Обо мне
                        li.admin__nav-item
                            a.admin__nav-link(@clik.prevent href="/admin#/projects") Работы
                        li.admin__nav-item
                            a.admin__nav-link(@clik.prevent href="/admin#/about") Отзывы
            .admin__content
                .admin__container.admin__container_content
                    router-view
</template>

<script>
    import login from './components/Login.vue';
    import myself from './components/pages/myself.vue';
    import projects from './components/pages/projects.vue';
    import about from './components/pages/about.vue';


    export default {
        components: {
            login,
            myself,
            projects,
            about,
        }
    };
</script>

<style lang="postcss">
    @import "../styles/main.pcss";
</style>