<template lang="pug">
.admin__block-about
    .admin__title
        h2.admin__title-name.admin__title-name_about Блок "Отзывы"
    .admin__data
        .admin__new-review(:class="{'admin__new-review_active' : addNewReviewPoint}")
            .admin__block_container.admin__new-review_container
                .admin__edit-project-subtitle Новый отзыв
                .admin__edit-project-content.admin__new-rewiew_content
                    form.admin__new-review-form(v-if="editReviewPoint === false" @submit="addNewReview")
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
                                    :class="{'form__error_add-review-photo' : validation.hasError('review.photo')}"
                                ) {{validation.firstError('review.photo')}}
                        .admin__new-review-right
                            .admin__new-review-form-row
                                label.admin__edit-project-data.admin__new-review-form-data
                                    .admin__edit-project-name Имя автора
                                    input.admin__edit-project-input(
                                        v-model="review.author"
                                        type="text"
                                        placeholder="Укажите здесь имя"
                                    )
                                    div(:class="{'form__error_add-project' : validation.hasError('review.author')}") {{validation.firstError('review.author')}}
                                label.admin__edit-project-data.admin__new-review-form-data
                                    .admin__edit-project-name Титул автора
                                    input.admin__edit-project-input(
                                        v-model="review.occ"
                                        type="text"
                                        placeholder="Укажите здесь титул"
                                    )
                                    div(:class="{'form__error_add-project' : validation.hasError('review.occ')}") {{validation.firstError('review.occ')}}
                            .admin__new-review-form-row
                                label.admin__new-review-form-data
                                    .admin__edit-project-name Отзыв
                                    textarea.admin__edit-project-input_textarea.admin__new-review-input_textarea(
                                        v-model="review.text"
                                        type="text"
                                        placeholder="Введите отзыв"
                                    )
                                    div(:class="{'form__error_add-review' : validation.hasError('review.text')}") {{validation.firstError('review.text')}}
                            .admin__new-review-form-row
                                button.button__add.button__add_cancel(@click="closeAddForm" type="reset")
                                button.button__add.button__add_submit(type="submit")
                    form.admin__new-review-form(v-else)
                        .admin__new-review-left
                            .admin__new-review-left_container
                                label.admin__new-review-add-photo(
                                    for="add-edit-review-photo"
                                    :class="{hide: renderedPhoto.length}"
                                    :style="{backgroundImage: `url(${renderedPhoto})`}"
                                )
                                span.admin__new-review-add-photo-text Изменить фото
                                input.admin__new-review-add-photo-input(
                                    id="add-edit-review-photo"
                                    accept="image/*"
                                    type="file"
                                    @change="hadleFile"
                                )
                                div(
                                    :class="{'form__error_add-review-photo' : validation.hasError('review.photo')}"
                                ) {{validation.firstError('review.photo')}}
                        .admin__new-review-right
                            .admin__new-review-form-row
                                label.admin__edit-project-data.admin__new-review-form-data
                                    .admin__edit-project-name Имя автора
                                    input.admin__edit-project-input(
                                        v-model="review.author"
                                        type="text"
                                        placeholder="Укажите здесь имя"
                                    )
                                    div(:class="{'form__error_add-project' : validation.hasError('review.author')}") {{validation.firstError('review.author')}}
                                label.admin__edit-project-data.admin__new-review-form-data
                                    .admin__edit-project-name Титул автора
                                    input.admin__edit-project-input(
                                        v-model="review.occ"
                                        type="text"
                                        placeholder="Укажите здесь титул"
                                    )
                                    div(:class="{'form__error_add-project' : validation.hasError('review.occ')}") {{validation.firstError('review.occ')}}
                            .admin__new-review-form-row
                                label.admin__new-review-form-data
                                    .admin__edit-project-name Отзыв
                                    textarea.admin__edit-project-input_textarea.admin__new-review-input_textarea(
                                        v-model="review.text"
                                        type="text"
                                        placeholder="Введите отзыв"
                                    )
                                    div(:class="{'form__error_add-review' : validation.hasError('review.text')}") {{validation.firstError('review.text')}}
                            .admin__new-review-form-row
                                button.button__add.button__add_cancel(@click="closeAddForm" type="reset")
                                button.button__add.button__add_submit(type="submit")
        .admin__projects.admin__reviews
            ul.admin__projects-list.admin__reviews-list
                li.admin__projects-item_new.admin__reviews-item_new
                    button.admin__projects-add(@click="showReviewForm")
                        .admin__projects-add-button
                        .admin__projects-add-text Добавить отзыв
                li.admin__projects-item.admin__reviews-item(v-for="review in reviews" :key="review.id")
                    .admin__reviews_user
                        .admin__reviews_user-left
                            .ava.ava_admin.admin__reviews_ava
                                img.admin__photo.user__photo(:src="`https://webdev-api.loftschool.com/${review.photo}`", alt="User photo")
                        .admin__reviews_user-right
                            .admin__reviews_user-name {{review.author}}
                            .admin__reviews_user-prof {{review.occ}}
                    .admin__projects-descr
                        .admin__projects-descr_container
                            .admin__projects-text {{review.text}}
                            .admin__projects-buttons
                                button.button_edit.button_edit_projects(type="button" @click="editReview") Править
                                button.button__group.button__group_remove.button__group_remove_projects(type="button" @click="removeExistedReview") Удалить

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
        // components: {
        //     addReview: ()=> import('../AddReview.vue')
        // },
        data() {
            return {
                renderedPhoto: "",
                addNewReviewPoint: false,
                editReviewPoint: false,
                reviews: [],
                review: {
                    photo: {},
                    author: "",
                    occ: "",
                    text: ""
                }
            }
        },
        mixins: [require('simple-vue-validator').mixin],
        validators: {
            'review.photo'(value) {
                return Validator.value(value).required(errorMessagePhoto);
            },
            'review.author'(value) {
                return Validator.value(value).required(errorMessage);
            },
            'review.occ'(value) {
                return Validator.value(value).required(errorMessage);
            },
            'review.text'(value) {
                return Validator.value(value).required(errorMessage);
            }
        },
        created() {
            this.fetchReviews();
        },
        methods: {
            hadleFile(e) {
                const file = e.target.files[0];
                this.review.photo = file;
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
                this.editReviewPoint = false;
                this.renderedPhoto = "";
                this.review.photo = {};
                this.review.author = "";
                this.review.occ = "";
                this.review.text = "";
                this.validation.reset();
                this.addNewReviewPoint = false;
            },
            addNewReview() {
                this.$validate().then(success =>{
                    if(!success) return;
                    try {
                        const formData = new FormData();

                        Object.keys(this.review).forEach(key => {
                            const value = this.review[key];
                            formData.append(key, value);
                        })

                        axios.post(baseURL + "/reviews", formData)

                        .then(response => {
                            console.log(response.data);
                            console.log('Отзыв добавлен');
                        });
                        console.log("Добавлен новый отзыв!");
                        this.renderedPhoto = "";
                        this.review.photo = {};
                        this.review.author = "";
                        this.review.occ = "";
                        this.review.text = "";
                        this.validation.reset();
                        this.addNewReviewPoint = false;
                    } catch (error) {
                    }
                })
            },
            async fetchReviews() {
                try {
                    const response = await axios.get(baseURL + "/reviews/255");
                    this.reviews = response.data;
                    // console.log(this.reviews);
                } catch (error) {
                    
                }
            },
            editReview() {
                this.editReviewPoint = true;
                this.addNewReviewPoint = true;
                try {
                    
                } catch (error) {
                    
                }
            },
            async removeExistedReview() {
                try {
                    await console.log(this.response.data)
                } catch (error) {
                    
                }
            }
        }
    }
</script>

<style lang="pcss">
    @import "../../../styles/main.pcss";
</style>