<template lang="pug">
    .admin__block-projects
        .admin__title
            h2.admin__title-name.admin__title-name_projects Блок "Работы"
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
                                    input.admin__edit-project-input(name="new_project_link", placeholder="Введите ссылку")
                                label.admin__edit-project-data.admin__edit-project-data-textarea
                                    .admin__edit-project-name Описание
                                    textarea.admin__edit-project-input.admin__edit-project-input_textarea(name="new_project_descr", placeholder="Введите описание")
                                label.admin__edit-project-data
                                    .admin__edit-project-name Добавление тэга
                                    input.admin__edit-project-input(name="new_project_tool", placeholder="Добавьте тэг")
                                ul.admin__edit-project-tool-list
                                    li.projects__tools-item.admin__edit-project-tool-item
                                        .projects__tools-name.projects__tools-name_admin HTML
                                        button.projects__tools-close
                                    li.projects__tools-item.admin__edit-project-tool-item
                                        .projects__tools-name.projects__tools-name_admin CSS
                                        button.projects__tools-close
                                    li.projects__tools-item.admin__edit-project-tool-item
                                        .projects__tools-name.projects__tools-name_admin Javascript
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
                                    .projects__tools-name.admin__projects__tool-name HTML
                                li.projects__tools-item.admin__projects_tool
                                    .projects__tools-name.admin__projects__tool-name CSS
                                li.projects__tools-item.admin__projects_tool
                                    .projects__tools-name.admin__projects__tool-name Javascript
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
                                    .projects__tools-name.admin__projects__tool-name HTML
                                li.projects__tools-item.admin__projects_tool
                                    .projects__tools-name.admin__projects__tool-name CSS
                                li.projects__tools-item.admin__projects_tool
                                    .projects__tools-name.admin__projects__tool-name Javascript
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
                                    .projects__tools-name.admin__projects__tool-name HTML
                                li.projects__tools-item.admin__projects_tool
                                    .projects__tools-name.admin__projects__tool-name CSS
                                li.projects__tools-item.admin__projects_tool
                                    .projects__tools-name.admin__projects__tool-name Javascript
                        .admin__projects-descr
                            .admin__projects-descr_container
                                .admin__projects-title Учебный проект 'Коворкинг'
                                .admin__projects-text Многостраничный сайт. Школа онлайн онлайн образования Loftschool. Учебный проет реализован за 5 недель и сдан в обозначенные сроки. Оценка 'А'.
                                a.admin__projects-link(href="https://sden4.github.io/loftschool-stage-1/") sden4.github.io/loftschool-stage-1
                                .admin__projects-buttons
                                    button.button_edit.button_edit_projects Править
                                    button.button__group.button__group_remove.button__group_remove_projects Удалить
</template>

<script id="projects">
    export default {
        name: "projects"
    }
</script>