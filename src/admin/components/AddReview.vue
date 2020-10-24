<template lang="pug">
    li.admin__projects-item.admin__reviews-item
        .admin__reviews_user
            .admin__reviews_user-left
                .ava.ava_admin.admin__reviews_ava
                    img.admin__photo.user__photo(src="", alt="User photo", loading='lazy')
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

<script id="add-review">
    export default {
        props: {
            reviews: {
                type: Object,
                default: () => {},
                required: true
            }
        },
    };
</script>