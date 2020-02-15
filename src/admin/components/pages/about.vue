<template lang="pug">
.admin__block-about
    .admin__title
        h2.admin__title-name.admin__title-name_about Блок "Отзывы"
    .admin__data
        .admin__new-review(:class="{'admin__new-review_active' : addNewReviewPoint}")
            .admin__block_container.admin__new-review_container
                .admin__edit-project-subtitle Новый отзыв
                .admin__edit-project-content.admin__new-rewiew_content
                    form.admin__new-review-form(@submit="addNewReview")
                        .admin__new-review-left
                            .admin__new-review-left_container
                                label.admin__new-review-add-photo(
                                    for="add-review-photo"
                                    :class="{hide: renderedPhoto.length}"
                                    :style="{backgroundImage: `url(${renderedPhoto})`}"
                                )
                                span.admin__new-review-add-photo-text Добавить фото
                                input.admin__new-review-add-photo-input(
                                    id="add-review-photo"
                                    accept="image/*"
                                    type="file"
                                    @change="hadleFile"
                                )
                                div(
                                    :class="{'form__error_add-review-photo' : validation.hasError('reviews.photo')}"
                                ) {{validation.firstError('reviews.photo')}}
                        .admin__new-review-right
                            .admin__new-review-form-row
                                label.admin__edit-project-data.admin__new-review-form-data
                                    .admin__edit-project-name Имя автора
                                    input.admin__edit-project-input(
                                        v-model="reviews.author"
                                        type="text"
                                        placeholder="Укажите здесь имя"
                                    )
                                    div(:class="{'form__error_add-project' : validation.hasError('reviews.author')}") {{validation.firstError('reviews.author')}}
                                label.admin__edit-project-data.admin__new-review-form-data
                                    .admin__edit-project-name Титул автора
                                    input.admin__edit-project-input(
                                        v-model="reviews.occ"
                                        type="text"
                                        placeholder="Укажите здесь титул"
                                    )
                                    div(:class="{'form__error_add-project' : validation.hasError('reviews.occ')}") {{validation.firstError('reviews.occ')}}
                            .admin__new-review-form-row
                                label.admin__new-review-form-data
                                    .admin__edit-project-name Отзыв
                                    textarea.admin__edit-project-input_textarea.admin__new-review-input_textarea(
                                        v-model="reviews.text"
                                        type="text"
                                        placeholder="Введите отзыв"
                                    )
                                    div(:class="{'form__error_add-review' : validation.hasError('reviews.text')}") {{validation.firstError('reviews.text')}}
                            .admin__new-review-form-row
                                button.button__add.button__add_cancel(@click="closeAddForm" type="reset")
                                button.button__add.button__add_submit(type="submit")
        .admin__projects.admin__reviews
            ul.admin__projects-list.admin__reviews-list
                li.admin__projects-item_new.admin__reviews-item_new
                    button.admin__projects-add(@click="showReviewForm")
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
    import axios from "axios";
    import { Validator } from 'simple-vue-validator';
    const errorMessage = "Заполните поле";
    const errorMessagePhoto = "Загрузите фото";
    const baseURL = "https://webdev-api.loftschool.com";

    const token = localStorage.getItem("token");
    if(!token) {console.log("Отсутствует токен")};

    export default {
        name: "about",
        data() {
            return {
                renderedPhoto: "",
                addNewReviewPoint: false,
                reviews: {
                    photo: {},
                    author: "",
                    occ: "",
                    text: ""
                }
            }
        },
        mixins: [require('simple-vue-validator').mixin],
        validators: {
            'reviews.photo'(value) {
                return Validator.value(value).required(errorMessagePhoto);
            },
            'reviews.author'(value) {
                return Validator.value(value).required(errorMessage);
            },
            'reviews.occ'(value) {
                return Validator.value(value).required(errorMessage);
            },
            'reviews.text'(value) {
                return Validator.value(value).required(errorMessage);
            }
        },
        methods: {
            hadleFile(e) {
                const file = e.target.files[0];
                this.reviews.photo = file;
                this.renderImageFile(file);
            },
            renderImageFile(file) {
                const reader = new FileReader();
                try {
                    reader.readAsDataURL(file);
                    reader.onloadend = () => {
                        this.renderedPhoto = reader.result;
                    }
                } catch (error) {
                    throw new Error("Ошибка при чтении файла");
                }
            },
            showReviewForm() {
                this.addNewReviewPoint = true;
            },
            closeAddForm() {
                this.renderedPhoto = {};
                this.reviews.author = "";
                this.reviews.occ = "";
                this.reviews.text = "";
                this.validation.reset();
                this.addNewReviewPoint = false;
            },
            addNewReview() {
                this.$validate().then(success =>{
                    if(!success) return;
                    try {
                        const formData = new FormData();

                        Object.keys(this.reviews).forEach(key => {
                            const value = this.reviews[key];
                            formData.append(key, value);
                        })

                        axios.post(baseURL + "/reviews", formData)

                        .then(response => {
                            console.log(response.data);
                            console.log('Отзыв добавлен');
                        });
                        console.log("Добавлен новый отзыв!");
                        this.renderedPhoto = {};
                        this.reviews.author = "";
                        this.reviews.occ = "";
                        this.reviews.text = "";
                        this.validation.reset();
                        this.addNewReviewPoint = false;
                    } catch (error) {
                    }
                })
            }
        }
    }
</script>

<style lang="pcss">
    @import "../../../styles/main.pcss";
</style>