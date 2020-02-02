<style lang="postcss">
    @import "../styles/main.pcss";
</style>

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
                            a.admin__nav-link Обо мне
                        li.admin__nav-item
                            a.admin__nav-link Работы
                        li.admin__nav-item
                            a.admin__nav-link Отзывы
            .admin__content
                .admin__container.admin__container_content
                    .admin__block-myself
                        .admin__title
                            h2.admin__title-name Блок "Обо мне"
                            .admin__add-group
                                .button__add_cont
                                    button.button__add
                                .admin__add-text Добавить группу
                        .admin__data
                            ul.admin__group-list
                                li.admin__group-item
                                    .admin__group_container
                                        .admin__group-name
                                            .admin__group-name-text Frontend
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
                                                        //- button.button_edit
                                                        //- button.button_remove
                                        .admin__skills-add
                                            form.admin__skills-new-skill
                                                input.admin__skills-new(name="skill-name", placeholder="Новый навык")
                                            form.admin__skills-new-persent
                                                input.admin__skills-setPercent(name="skill-percent", placeholder="100 %")
                                            .admin__skills-buttons
                                                button.button__add.button__add_skill
                                li.admin__group-item
                                    .admin__group_container
                                        .admin__group-name
                                            .admin__group-name-text.admin__group-name-text_active Workflow
                                            //- form.admin__group-new-name
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
                                                        button.button_edit
                                                        button.button_remove
                                        .admin__skills-add
                                            form.admin__skills-new-skill
                                                input.admin__skills-new(name="skill-name", placeholder="Новый навык")
                                            form.admin__skills-new-persent
                                                input.admin__skills-setPercent(name="skill-percent", placeholder="100 %")
                                            .admin__skills-buttons
                                                button.button__add.button__add_skill
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
                                                        //- button.button_edit
                                                        //- button.button_remove
                                        .admin__skills-add
                                            form.admin__skills-new-skill
                                                input.admin__skills-new(name="skill-name", placeholder="Новый навык")
                                            form.admin__skills-new-persent
                                                input.admin__skills-setPercent(name="skill-percent", placeholder="100 %")
                                            .admin__skills-buttons
                                                button.button__add.button__add_skill
                    .admin__block-projects
                        .admin__title
                            h2.admin__title-name Блок "Работы"
                        .admin__data
                            .admin__edit-project
                                .admin__block_container.admin__edit-project_container
                                    .admin__edit-project-subtitle Редактирование Работы
                                    .admin__edit-project-content
                                        .admin__edit-project-content-left
                                            .admin__edit-project-new-photo
                                                .admin__edit-project-new-photo_container
                                                    .admin__edit-project-new-photo-text Перетащите или нажмите кноку для загрузки изображения
                                                    button.button__add.button__add_download
                                        .admin__edit-project-content-right
                                            form.admin__edit-project-formdata
                                                label.admin__edit-project-data
                                                    .admin__edit-project-name Название
                                                    input.admin__edit-project-input(name="new_project_name", placeholder="Введите название нового проекта")
                                                label.admin__edit-project-data
                                                    .admin__edit-project-name Ссылка
                                                    input.admin__edit-project-input(name="new_project_link", placeholder="Ведите ссылку")
                                                label.admin__edit-project-data.admin__edit-project-data-textarea
                                                    .admin__edit-project-name Описание
                                                    textarea.admin__edit-project-input.admin__edit-project-input_textarea(name="new_project_descr", placeholder="Ведите описание")
                                                label.admin__edit-project-data
                                                    .admin__edit-project-name Добавление тэга
                                                    input.admin__edit-project-input(name="new_project_tool", placeholder="Добавьте тэг")
                                                ul.admin__edit-project-tool-list
                                                    li.projects__tools-item.admin__edit-project-tool-item
                                                        .projects__tools-name HTML
                                                        button.projects__tools-close
                                                    li.projects__tools-item.admin__edit-project-tool-item
                                                        .projects__tools-name CSS
                                                        button.projects__tools-close
                                                    li.projects__tools-item.admin__edit-project-tool-item
                                                        .projects__tools-name Javascript
                                                        button.projects__tools-close
                                                .admin__edit-project-form-buttons
                                                    button.button__add.button__add_cancel(type="reset")
                                                    button.button__add.button__add_submit(type="submit")
                            .admin__projects
                                ul.admin__projects-list
                                    li.admin__projects-item_new
                                        button.admin__projects-add
                                            .admin__projects-add-button
                                            .admin__projects-add-text Добавить работу
                                    li.admin__projects-item
                                        .admin__projects-preview
                                            .admin__projects-preview_pic
                                                img.admin__projects-preview_pic(src="~images/projects/1.jpg" alt="Project preview")
                                            ul.admin__edit-project-tool-list.admin__edit-project-tool-list_preview
                                                li.projects__tools-item.admin__projects_tool
                                                    .projects__tools-name HTML
                                                li.projects__tools-item.admin__projects_tool
                                                    .projects__tools-name CSS
                                                li.projects__tools-item.admin__projects_tool
                                                    .projects__tools-name Javascript
                                        .admin__projects-descr
                                            .admin__projects-descr_container
                                                .admin__projects-title Учебный проект 'Коворкинг'
                                                .admin__projects-text Многостраничный сайт. Школа онлайн онлайн образования Loftschool. Учебный проет реализован за 5 недель и сдан в обозначенные сроки. Оценка 'А'.
                                                a.admin__projects-link(href="https://sden4.github.io/loftschool-stage-1/") sden4.github.io/loftschool-stage-1
                                                .admin__projects-buttons
                                                    button.button_edit.button_edit_projects Править
                                                    button.button__group.button__group_remove.button__group_remove_projects Удалить
                                    li.admin__projects-item
                                        .admin__projects-preview
                                            .admin__projects-preview_pic
                                                img.admin__projects-preview_pic(src="~images/projects/1.jpg" alt="Project preview")
                                            ul.admin__edit-project-tool-list.admin__edit-project-tool-list_preview
                                                li.projects__tools-item.admin__projects_tool
                                                    .projects__tools-name HTML
                                                li.projects__tools-item.admin__projects_tool
                                                    .projects__tools-name CSS
                                                li.projects__tools-item.admin__projects_tool
                                                    .projects__tools-name Javascript
                                        .admin__projects-descr
                                            .admin__projects-descr_container
                                                .admin__projects-title Учебный проект 'Коворкинг'
                                                .admin__projects-text Многостраничный сайт. Школа онлайн онлайн образования Loftschool. Учебный проет реализован за 5 недель и сдан в обозначенные сроки. Оценка 'А'.
                                                a.admin__projects-link(href="https://sden4.github.io/loftschool-stage-1/") sden4.github.io/loftschool-stage-1
                                                .admin__projects-buttons
                                                    button.button_edit.button_edit_projects Править
                                                    button.button__group.button__group_remove.button__group_remove_projects Удалить
                                    li.admin__projects-item
                                        .admin__projects-preview
                                            .admin__projects-preview_pic
                                                img.admin__projects-preview_pic(src="~images/projects/1.jpg" alt="Project preview")
                                            ul.admin__edit-project-tool-list.admin__edit-project-tool-list_preview
                                                li.projects__tools-item.admin__projects_tool
                                                    .projects__tools-name HTML
                                                li.projects__tools-item.admin__projects_tool
                                                    .projects__tools-name CSS
                                                li.projects__tools-item.admin__projects_tool
                                                    .projects__tools-name Javascript
                                        .admin__projects-descr
                                            .admin__projects-descr_container
                                                .admin__projects-title Учебный проект 'Коворкинг'
                                                .admin__projects-text Многостраничный сайт. Школа онлайн онлайн образования Loftschool. Учебный проет реализован за 5 недель и сдан в обозначенные сроки. Оценка 'А'.
                                                a.admin__projects-link(href="https://sden4.github.io/loftschool-stage-1/") sden4.github.io/loftschool-stage-1
                                                .admin__projects-buttons
                                                    button.button_edit.button_edit_projects Править
                                                    button.button__group.button__group_remove.button__group_remove_projects Удалить







</template>