<template lang="pug">
    .admin__block-projects
        .admin__title
            h2.admin__title-name.admin__title-name_projects Блок "Работы"
        .admin__data
            .admin__edit-project(:class="{'admin__edit-project_active' : addNewWorkPoint}")
                .admin__block_container.admin__edit-project_container
                    .admin__edit-project-subtitle Редактирование Работы
                    .admin__edit-project-content
                        form.admin__edit-project-formdata(@submit.prevent="addNewWork")
                            .admin__edit-project-content-left
                                label.admin__edit-project-new-photo(for="add-work-photo")
                                    span.admin__edit-project-new-photo-text Перетащите или нажмите кноку для загрузки изображения
                                    .button__add.button__add_download.button__add_download_label
                                input.admin__new-review-add-photo-input(
                                    @change="photoDownLoad"
                                    id="add-work-photo"
                                    accept="image/*"
                                    type="file"
                                )
                                div(
                                    :class="{'form__error_add-work-photo' : validation.hasError('works.photo')}"
                                ) {{validation.firstError('works.photo')}}
                            .admin__edit-project-content-right
                                label.admin__edit-project-data
                                    .admin__edit-project-name Название
                                    input.admin__edit-project-input(
                                        v-model="works.title"
                                        type="text"
                                        placeholder="Введите название нового проекта"
                                    )
                                    div(
                                        :class="{'form__error_add-project' : validation.hasError('works.title')}"
                                    ) {{validation.firstError('works.title')}}
                                label.admin__edit-project-data
                                    .admin__edit-project-name Ссылка
                                    input.admin__edit-project-input(
                                        v-model="works.link"
                                        type="text"
                                        placeholder="Введите ссылку"
                                    )
                                    div(
                                        :class="{'form__error_add-project' : validation.hasError('works.link')}"
                                    ) {{validation.firstError('works.link')}}
                                label.admin__edit-project-data.admin__edit-project-data-textarea
                                    .admin__edit-project-name Описание
                                    textarea.admin__edit-project-input.admin__edit-project-input_textarea(
                                        v-model="works.description"
                                        type="text"
                                        placeholder="Введите описание"
                                    )
                                    div(
                                        :class="{'form__error_add-project_textarea' : validation.hasError('works.description')}"
                                    ) {{validation.firstError('works.description')}}
                                label.admin__edit-project-data
                                    .admin__edit-project-name Добавление тэга
                                    input.admin__edit-project-input(
                                        v-model="works.techs"
                                        type="text"
                                        placeholder="Добавьте тэг"
                                    )
                                    div(
                                        :class="{'form__error_add-project' : validation.hasError('works.techs')}"
                                        ) {{validation.firstError('works.techs')}}
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
                                    button.button__add.button__add_cancel(@click="closeAddForm" type="reset")
                                    button.button__add.button__add_submit(type="submit")
            .admin__projects
                ul.admin__projects-list
                    li.admin__projects-item_new
                        button.admin__projects-add(@click="showAddForm")
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
    import axios from "axios";
    import { Validator } from 'simple-vue-validator';
    import renderer from "../../renderer.js";

    const errorMessage = "Заполните поле";
    const errorMessagePhoto = "Загрузите фото";


    export default {
        data() {
            return {
                addNewWorkPoint: false,
                works: {
                    photo: "",
                    title: "",
                    link: "",
                    description: "",
                    techs: ""
                }
            }
        },
        mixins: [require('simple-vue-validator').mixin],
        validators: {
            'works.photo'(value) {
                return Validator.value(value).required(errorMessagePhoto);
            },
            'works.title'(value) {
                return Validator.value(value).required(errorMessage);
            },
            'works.link'(value) {
                return Validator.value(value).required(errorMessage);
            },
            'works.description'(value) {
                return Validator.value(value).required(errorMessage);
            },
            'works.techs'(value) {
                return Validator.value(value).required(errorMessage);
            }
        },
        methods: {
            showAddForm() {
                this.addNewWorkPoint = true;
            },
            closeAddForm() {
                this.works.title = "";
                this.works.link = "";
                this.works.description = "";
                this.works.techs = "";
                this.works.photo = "";
                this.validation.reset();
                this.addNewWorkPoint = false;
            },
            addNewWork() {
                this.$validate().then(success =>{
                    if(!success) return;
                    try {




                        console.log("Добавлен новый проект!");
                        this.works.title = "";
                        this.works.link = "";
                        this.works.description = "";
                        this.works.techs = "";
                        this.works.photo = "";
                        this.validation.reset();
                        this.addNewWorkPoint = false;
                    } catch (error) {
                    }
                })
            },
            async photoDownLoad(e) {
                const file = e.target.files[0];
                this.works.photo = file;
                console.log(this.works.photo);
                try {
                    const renderedResult = await renderer(file);
                    this.renderedAvatar = renderedResult;
                    console.log('renderedResult' + renderedResult);
                } catch (error) {
                    
                }
            }
        }
    }
</script>