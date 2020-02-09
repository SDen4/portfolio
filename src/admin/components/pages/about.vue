<template lang="pug">
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
</template>

<script id="about">
export default {
    name: "about"
}
</script>

<style lang="pcss">
    @import "../../../styles/main.pcss";
</style>