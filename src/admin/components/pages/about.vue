<template lang="pug">
.admin__block-about
    .admin__title
        h2.admin__title-name.admin__title-name_about Блок "Отзывы"
    .admin__data
        .admin__new-review(:class="{'admin__new-review_active' : addNewReviewPoint}")
            .admin__block_container.admin__new-review_container
                .admin__edit-project-subtitle(v-if="editReviewPoint === false") Новый отзыв
                .admin__edit-project-subtitle(v-else) Редактировать отзыв
                .admin__edit-project-content.admin__new-rewiew_content
                    form.admin__new-review-form(v-if="editReviewPoint === false" @submit.prevent="addNewReview")
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
                                div(:class="{'form__error_add-review-photo' : validation.hasError('review.photo')}") {{validation.firstError('review.photo')}}
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
                                    class="hide"
                                    :style="{backgroundImage: `url(https://webdev-api.loftschool.com/${editedReview.photo})`}"
                                )
                                span.admin__new-review-add-photo-text Изменить фото
                                input.admin__new-review-add-photo-input(
                                    id="add-edit-review-photo"
                                    accept="image/*"
                                    type="file"
                                    @change="hadleFile"
                                )
                        .admin__new-review-right
                            .admin__new-review-form-row
                                label.admin__edit-project-data.admin__new-review-form-data
                                    .admin__edit-project-name Имя автора
                                    input.admin__edit-project-input(
                                        v-model="editedReview.author"
                                        type="text"
                                        placeholder="Укажите здесь имя"
                                    )
                                    div(:class="{'form__error_add-project' : validation.hasError('editedReview.author')}") {{validation.firstError('editedReview.author')}}
                                label.admin__edit-project-data.admin__new-review-form-data
                                    .admin__edit-project-name Титул автора
                                    input.admin__edit-project-input(
                                        v-model="editedReview.occ"
                                        type="text"
                                        placeholder="Укажите здесь титул"
                                    )
                                    div(:class="{'form__error_add-project' : validation.hasError('editedReview.occ')}") {{validation.firstError('editedReview.occ')}}
                            .admin__new-review-form-row
                                label.admin__new-review-form-data
                                    .admin__edit-project-name Отзыв
                                    textarea.admin__edit-project-input_textarea.admin__new-review-input_textarea(
                                        v-model="editedReview.text"
                                        type="text"
                                        placeholder="Введите отзыв"
                                    )
                                    div(
                                        :class="{'form__error_add-review' : validation.hasError('editedReview.text')}"
                                    ) {{validation.firstError('editedReview.text')}}
                            .admin__new-review-form-row
                                button.button__add.button__add_cancel(@click="closeAddForm" type="reset")
                                button.button__add.button__add_submit(type="submit" @click="editReview")
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
                                img.admin__photo.user__photo(:src="`https://webdev-api.loftschool.com/${review.photo}`", alt="User photo", loading='lazy')
                        .admin__reviews_user-right
                            .admin__reviews_user-name {{review.author}}
                            .admin__reviews_user-prof {{review.occ}}
                    .admin__projects-descr
                        .admin__projects-descr_container
                            .admin__projects-text {{review.text}}
                            .admin__projects-buttons
                                button.button_edit.button_edit_projects(type="button" @click="editReviewOpenForm(review)") Править
                                button.button__group.button__group_remove.button__group_remove_projects(type="button" @click="removeExistedReview(review)") Удалить

</template>

<script id="about">
    import $axios from '../../requests.js';
    import { Validator } from 'simple-vue-validator';
    const errorMessage = "Заполните поле";
    const baseURL = "https://webdev-api.loftschool.com";

    const token = localStorage.getItem("token");

    export default {
        name: "about",
        data() {
            return {
                renderedPhoto: "",
                addNewReviewPoint: false,
                editReviewPoint: false,
                reviews: [],
                editedReview: {},
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
            'review.author'(value) {
                return Validator.value(value).required(errorMessage);
            },
            'review.occ'(value) {
                return Validator.value(value).required(errorMessage);
            },
            'review.text'(value) {
                return Validator.value(value).required(errorMessage);
            },
            // 'editedReview.author'(value) {
            //     return Validator.value(value).required(errorMessage);
            // },
            // 'editedReview.occ'(value) {
            //     return Validator.value(value).required(errorMessage);
            // },
            // 'editedReview.text'(value) {
            //     return Validator.value(value).required(errorMessage);
            // }
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
                        });

                        $axios.post(baseURL + "/reviews", formData)
                        .then(response => {
                            this.reviews.push(response.data);
                        });
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
                    const response = await $axios.get(baseURL + "/reviews/255");
                    this.reviews = response.data;
                } catch (error) {
                    
                }
            },
            editReviewOpenForm(editedReviewObj) {
                try {
                    this.editReviewPoint = true;
                    this.addNewReviewPoint = true;
                    this.editedReview = editedReviewObj;

                    window.scrollTo({
                        behavior: 'smooth',
                        top: 0,
                    });

                } catch (error) {}
            },
            async editReview() {
                try {
                    const editCurrentReview = await $axios.post(baseURL + `/reviews/${this.editedReview.id}`, this.editedReview);
                    this.reviews = this.reviews.map(item => {
                        return item.id === this.editedReview.id ? editedReview : item;
                    });
                } catch (error) {
                } finally {
                    this.editReviewPoint = false;
                    this.addNewReviewPoint = false;
                }
            },
            async removeExistedReview(removedItem) {
                try {
                    event.preventDefault();
                    const responseDel = await $axios.delete(baseURL + `/reviews/${removedItem.id}`);
                    this.reviews = this.reviews.filter(item => item.id !== removedItem.id);
                } catch (error) {
                    
                }
            }
        }
    }
</script>

<style lang="pcss">
    @import "../../../styles/main.pcss";
</style>