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
                    .admin__block-about
                      .admin__title
                        h2.admin__title-name.admin__title-name_about Блок "Отзывы"
                      .admin__data
                        .admin__new-review
                          .admin__block_container.admin__new-review_container
                            .admin__edit-project-subtitle Новый отзыв
                            .admin__edit-project-content.admin__new-rewiew_content
                              .admin__new-review-left
                                .admin__new-review-left_container
                                  .admin__new-review-add-photo
                                  button.admin__new-review-add-photo-text Добавить фото
                              .admin__new-review-right
                                .admin__new-review-right_container
                                  form.admin__new-review-form
                                    .admin__new-review-form-row
                                      label.admin__edit-project-data.admin__new-review-form-data
                                        .admin__edit-project-name Имя автора
                                        input.admin__edit-project-input(placeholder="Укажите здесь имя", name="new-review-name")
                                      label.admin__edit-project-data.admin__new-review-form-data
                                        .admin__edit-project-name Титул автора
                                        input.admin__edit-project-input(placeholder="Укажите здесь титул", name="new-review-name")
                                    .admin__new-review-form-row
                                      label.admin__new-review-form-data
                                        .admin__edit-project-name Отзыв
                                        textarea.admin__edit-project-input_textarea.admin__new-review-input_textarea(placeholder="Введите отзыв", name="new-review-name")
                                    .admin__new-review-form-row
                                      button.button__add.button__add_cancel(type="reset")
                                      button.button__add.button__add_submit(type="submit")
                        .admin__projects.admin__reviews
                          ul.admin__projects-list.admin__reviews-list
                            li.admin__projects-item_new.admin__reviews-item_new
                              button.admin__projects-add
                                .admin__projects-add-button
                                .admin__projects-add-text Добавить отзыв
                            li.admin__projects-item.admin__reviews-item
                                .admin__reviews_user
                                    .admin__reviews_user-left
                                        .ava.ava_admin.admin__reviews_ava
                                            img.admin__photo.user__photo(src="~images/content/feedback_user1.jpg", alt="User photo")
                                    .admin__reviews_user-right
                                        .admin__reviews_user-name Ковальчук Дмитрий
                                        .admin__reviews_user-prof Основатель Loftschool
                                .admin__projects-descr
                                    .admin__projects-descr_container
                                        .admin__projects-text Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах.
                                        .admin__projects-buttons
                                            button.button_edit.button_edit_projects Править
                                            button.button__group.button__group_remove.button__group_remove_projects Удалить
                            li.admin__projects-item.admin__reviews-item
                                .admin__reviews_user
                                    .admin__reviews_user-left
                                        .ava.ava_admin.admin__reviews_ava
                                            img.admin__photo.user__photo(src="~images/content/feedback_user1.jpg", alt="User photo")
                                    .admin__reviews_user-right
                                        .admin__reviews_user-name Ковальчук Дмитрий
                                        .admin__reviews_user-prof Основатель Loftschool
                                .admin__projects-descr
                                    .admin__projects-descr_container
                                        .admin__projects-text Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах.
                                        .admin__projects-buttons
                                            button.button_edit.button_edit_projects Править
                                            button.button__group.button__group_remove.button__group_remove_projects Удалить
                            li.admin__projects-item.admin__reviews-item
                                .admin__reviews_user
                                    .admin__reviews_user-left
                                        .ava.ava_admin.admin__reviews_ava
                                            img.admin__photo.user__photo(src="~images/content/feedback_user1.jpg", alt="User photo")
                                    .admin__reviews_user-right
                                        .admin__reviews_user-name Ковальчук Дмитрий
                                        .admin__reviews_user-prof Основатель Loftschool
                                .admin__projects-descr
                                    .admin__projects-descr_container
                                        .admin__projects-text Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах.
                                        .admin__projects-buttons
                                            button.button_edit.button_edit_projects Править
                                            button.button__group.button__group_remove.button__group_remove_projects Удалить
    login-admin
</template>

<script>
    import LoginAdmin from './components/Login.vue';
    export default {
        components: {
            LoginAdmin
        }
    };
</script>