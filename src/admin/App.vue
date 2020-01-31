<style lang="postcss">
    @import "../styles/main.pcss";
</style>

<template lang="pug">
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
                            a.admin__nav-link Обо мне
                        li.admin__nav-item
                            a.admin__nav-link Работы
                        li.admin__nav-item
                            a.admin__nav-link Отзывы
            .admin__content
                .admin__container.admin__container_content
                    .admin__block-myself
                        .admim__subtitle
                            h2.admim__subtitle-name Блок "Обо мне"
                            .admin__add-group
                                button.button__add
                                .admin__add-text Добавить группу
                        .admin__data
                            ul.admin__group-list
                                li.admin__group-item
                                    .admin__group_container
                                        .admin__group-name
                                            .admin__group-name-text
                                            form.admin__group-new-name
                                                input.admin__group-name-input(name="group-name", placeholder="Название новой группы")
                                            .admin__group-name-buttons
                                                button.button__group.button__group_approve
                                                button.button__group.button__group_remove
                                        .admin__skills
                                            ul.admin__skills-list
                                                li.admin__skills-item
                                                    .admin__skills-name
                                                    .admin__skills-percent
                                                    .admin__skills-edit-buttons
                                                        //- button.button-edit
                                                        //- button.button-remove
                                        .admin__skills-add
                                            form.admin__skills-new-skill
                                                input.admin__skills-new(name="skill-name", placeholder="Новый навык")
                                            form.admin__skills-new-persent
                                                input.admin__skills-setPercent(name="skill-percent", placeholder="100 %")
                                            .admin__skills-buttons
                                                button.button__add.button__add-skill
                                li.admin__group-item
                                    .admin__group_container
                                        .admin__group-name
                                            .admin__group-name-text
                                            form.admin__group-new-name
                                                input.admin__group-name-input(name="group-name", placeholder="Название новой группы")
                                            .admin__group-name-buttons
                                                button.button__group.button__group_approve
                                                button.button__group.button__group_remove
                                        .admin__skills
                                            ul.admin__skills-list
                                                li.admin__skills-item
                                                    .admin__skills-name Git
                                                    .admin__skills-percent 100%
                                                    .admin__skills-edit-buttons
                                                        button.button-edit
                                                        button.button-remove
                                        .admin__skills-add
                                            form.admin__skills-new-skill
                                                input.admin__skills-new(name="skill-name", placeholder="Новый навык")
                                            form.admin__skills-new-persent
                                                input.admin__skills-setPercent(name="skill-percent", placeholder="100 %")
                                            .admin__skills-buttons
                                                button.button__add.button__add-skill
                                li.admin__group-item
                                    .admin__group_container
                                        .admin__group-name
                                            .admin__group-name-text
                                            form.admin__group-new-name
                                                input.admin__group-name-input(name="group-name", placeholder="Название новой группы")
                                            .admin__group-name-buttons
                                                button.button__group.button__group_approve
                                                button.button__group.button__group_remove
                                        .admin__skills
                                            ul.admin__skills-list
                                                li.admin__skills-item
                                                    .admin__skills-name
                                                    .admin__skills-percent
                                                    .admin__skills-edit-buttons
                                                        //- button.button-edit
                                                        //- button.button-remove
                                        .admin__skills-add
                                            form.admin__skills-new-skill
                                                input.admin__skills-new(name="skill-name", placeholder="Новый навык")
                                            form.admin__skills-new-persent
                                                input.admin__skills-setPercent(name="skill-percent", placeholder="100 %")
                                            .admin__skills-buttons
                                                button.button__add.button__add-skill

</template>