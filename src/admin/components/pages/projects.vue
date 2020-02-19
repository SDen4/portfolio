<template lang="pug">
    .admin__block-projects
        .admin__title
            h2.admin__title-name.admin__title-name_projects Блок "Работы"
        .admin__data
            .admin__edit-project(:class="{'admin__edit-project_active' : addNewWorkPoint}")
                .admin__block_container.admin__edit-project_container
                    .admin__edit-project-subtitle(v-if="editWorkPoint === false") Добавление новой Работы
                    .admin__edit-project-subtitle(v-else) Редактирование Работы
                    .admin__edit-project-content
                        form.admin__edit-project-formdata(v-if="editWorkPoint === false" @submit.prevent="addNewWork")
                            .admin__edit-project-content-left
                                label.admin__edit-project-new-photo(
                                    for="add-work-photo"
                                    :class="{formPic: renderedPhotoProject.length}"
                                    :style="{backgroundImage: `url(${renderedPhotoProject})`}"
                                )
                                    span.admin__edit-project-new-photo-text(
                                        :class="{hideText: renderedPhotoProject.length}"
                                    ) Перетащите или нажмите кноку для загрузки изображения
                                    .button__add.button__add_download.button__add_download_label(
                                        :class="{hideText: renderedPhotoProject.length}"
                                    )
                                input.admin__new-review-add-photo-input(
                                    @change="photoDownLoad"
                                    id="add-work-photo"
                                    accept="image/*"
                                    type="file"
                                )
                            .admin__edit-project-content-right
                                label.admin__edit-project-data
                                    .admin__edit-project-name Название
                                    input.admin__edit-project-input(
                                        v-model="work.title"
                                        type="text"
                                        placeholder="Введите название нового проекта"
                                    )
                                    div(
                                        :class="{'form__error_add-project' : validation.hasError('work.title')}"
                                    ) {{validation.firstError('work.title')}}
                                label.admin__edit-project-data
                                    .admin__edit-project-name Ссылка
                                    input.admin__edit-project-input(
                                        v-model="work.link"
                                        type="text"
                                        placeholder="Введите ссылку"
                                    )
                                    div(
                                        :class="{'form__error_add-project' : validation.hasError('work.link')}"
                                    ) {{validation.firstError('work.link')}}
                                label.admin__edit-project-data.admin__edit-project-data-textarea
                                    .admin__edit-project-name Описание
                                    textarea.admin__edit-project-input.admin__edit-project-input_textarea(
                                        v-model="work.description"
                                        type="text"
                                        placeholder="Введите описание"
                                    )
                                    div(
                                        :class="{'form__error_add-project_textarea' : validation.hasError('work.description')}"
                                    ) {{validation.firstError('work.description')}}
                                label.admin__edit-project-data
                                    .admin__edit-project-name Добавление тэга
                                    input.admin__edit-project-input(
                                        @input="addTag"
                                        v-model="work.techs"
                                        type="text"
                                        placeholder="Добавьте тэги через запятую"
                                    )
                                    div(
                                        :class="{'form__error_add-project' : validation.hasError('work.techs')}"
                                        ) {{validation.firstError('work.techs')}}
                                ul.admin__edit-project-tool-list
                                    li.projects__tools-item.admin__edit-project-tool-item(v-for="tech in work.techs" :key="tech.id")
                                        .projects__tools-name.projects__tools-name_admin {{tech}}
                                        button.projects__tools-close(type="button" @click="deleteTag(tech)")
                                .admin__edit-project-form-buttons
                                    button.button__add.button__add_cancel(@click="closeAddForm" type="reset")
                                    button.button__add.button__add_submit(type="submit")
                        form.admin__edit-project-formdata(v-else)
                            .admin__edit-project-content-left
                                label.admin__edit-project-new-photo(
                                    for="add-work-photo"
                                    class="formPic"
                                    :style="{backgroundImage: `url(https://webdev-api.loftschool.com/${editedWork.photo})`}"
                                )
                                    span.admin__edit-project-new-photo-text(
                                        :class="{hideText: renderedPhotoProject.length}"
                                    ) Изменение изображения
                                    .button__add.button__add_download.button__add_download_label(
                                        :class="{hideText: renderedPhotoProject.length}"
                                    )
                                input.admin__new-review-add-photo-input(
                                    @change="photoDownLoadEdited"
                                    id="add-work-photo"
                                    accept="image/*"
                                    type="file"
                                )
                            .admin__edit-project-content-right
                                label.admin__edit-project-data
                                    .admin__edit-project-name Название
                                    input.admin__edit-project-input(
                                        v-model="editedWork.title"
                                        type="text"
                                        placeholder="Введите название нового проекта"
                                    )
                                    div(
                                        :class="{'form__error_add-project' : validation.hasError('editedWork.title')}"
                                    ) {{validation.firstError('editedWork.title')}}
                                label.admin__edit-project-data
                                    .admin__edit-project-name Ссылка
                                    input.admin__edit-project-input(
                                        v-model="editedWork.link"
                                        type="text"
                                        placeholder="Введите ссылку"
                                    )
                                    div(
                                        :class="{'form__error_add-project' : validation.hasError('editedWork.link')}"
                                    ) {{validation.firstError('editedWork.link')}}
                                label.admin__edit-project-data.admin__edit-project-data-textarea
                                    .admin__edit-project-name Описание
                                    textarea.admin__edit-project-input.admin__edit-project-input_textarea(
                                        v-model="editedWork.description"
                                        type="text"
                                        placeholder="Введите описание"
                                    )
                                    div(
                                        :class="{'form__error_add-project_textarea' : validation.hasError('editedWork.description')}"
                                    ) {{validation.firstError('editedWork.description')}}
                                label.admin__edit-project-data
                                    .admin__edit-project-name Добавление тэга
                                    input.admin__edit-project-input(
                                        v-model="editedWork.techs"
                                        type="text"
                                        placeholder="Добавьте тэг"
                                    )
                                    div(
                                        :class="{'form__error_add-project' : validation.hasError('editedWork.techs')}"
                                        ) {{validation.firstError('editedWork.techs')}}
                                ul.admin__edit-project-tool-list
                                    li.projects__tools-item.admin__edit-project-tool-item(v-for="tech in editedWork.techs" :key="tech.id")
                                        .projects__tools-name.projects__tools-name_admin {{tech}}
                                        button.projects__tools-close(type="button" @click="deleteTag(tech)")
                                .admin__edit-project-form-buttons
                                    button.button__add.button__add_cancel(@click="closeAddForm" type="reset")
                                    button.button__add.button__add_submit(@click="editWork" type="submit")
            .admin__projects
                ul.admin__projects-list
                    li.admin__projects-item_new
                        button.admin__projects-add(@click="showAddForm")
                            .admin__projects-add-button
                            .admin__projects-add-text Добавить работу
                    li.admin__projects-item(v-for="work in works" :key="work.id")
                        .admin__projects-preview
                            .admin__projects-preview_pic
                                img.admin__projects-preview_pic(
                                    :src="`https://webdev-api.loftschool.com/${work.photo}`"
                                    alt="Project preview"
                                )
                            ul.admin__edit-project-tool-list.admin__edit-project-tool-list_preview
                                li.projects__tools-item.admin__projects_tool(v-for="tech in work.techs")
                                    .projects__tools-name.admin__projects__tool-name {{tech}}
                        .admin__projects-descr
                            .admin__projects-descr_container
                                .admin__projects-title {{work.title}}
                                .admin__projects-text {{work.description}}
                                a.admin__projects-link(:href="`${work.link}`") {{work.link}}
                                .admin__projects-buttons
                                    button.button_edit.button_edit_projects(
                                        type="button"
                                        @click="editWorkOpenForm(work)"
                                    ) Править
                                    button.button__group.button__group_remove.button__group_remove_projects(
                                        type="button"
                                        @click="removeExistedWork(work)"
                                    ) Удалить

</template>

<script id="projects">
    import $axios from '../../requests.js';
    import { Validator } from 'simple-vue-validator';
    import requests from '../../requests.js';

    const errorMessage = "Заполните поле";


    const baseURL = "https://webdev-api.loftschool.com";
    // const token = localStorage.getItem("token");
    
    // if(!token) {console.log("Отсутствует токен")};


    export default {
        data() {
            return {
                renderedPhotoProject: "",
                addNewWorkPoint: false,
                editWorkPoint: false,
                works: [],
                work: {
                    photo: {},
                    title: "",
                    link: "",
                    description: "",
                    techs: []
                },
                editedWork: {}
            }
        },
        mixins: [require('simple-vue-validator').mixin],
        validators: {
            'work.title'(value) {
                return Validator.value(value).required(errorMessage);
            },
            'work.link'(value) {
                return Validator.value(value).required(errorMessage);
            },
            'work.description'(value) {
                return Validator.value(value).required(errorMessage);
            },
            'work.techs'(value) {
                return Validator.value(value).required(errorMessage);
            },
            // 'editedWork.title'(value) {
            //     return Validator.value(value).required(errorMessage);
            // },
            // 'editedWork.link'(value) {
            //     return Validator.value(value).required(errorMessage);
            // },
            // 'editedWork.description'(value) {
            //     return Validator.value(value).required(errorMessage);
            // },
            // 'editedWork.techs'(value) {
            //     return Validator.value(value).required(errorMessage);
            // }    
        },
        created(editedWork) {
            this.fetchWorks();
        },
        methods: {
            addTag(e){
                const tagsString = e.target.value;
                const tagsArray = tagsString.split(",");

                this.work.techs = tagsArray;
            },
            deleteTag(deletedTech) {
                console.log(deletedTech);
                this.work.techs = this.work.techs.filter(item => item !== deletedTech);
            },
            showAddForm() {
                this.addNewWorkPoint = true;
            },
            closeAddForm() {
                this.work.title = "";
                this.work.link = "";
                this.work.description = "";
                this.work.techs = [];
                this.renderedPhotoProject = "";
                this.work.photo = {};
                this.validation.reset();
                this.addNewWorkPoint = false;
                this.editWorkPoint = false;
            },
            async photoDownLoad(e) {
            
                const file = e.target.files[0];
                this.work.photo = file;
                this.renderImageFile(file);
            
            },
            async photoDownLoadEdited(e) {
                this.editedWork.photo = "";
                const fileEdited = e.target.files[0];
                this.editedWork.photo = fileEdited;
                this.renderImageFile(fileEdited);
            
            },
            renderImageFile(file) {
                const reader = new FileReader();
                try {
                    reader.readAsDataURL(file);
                    reader.onloadend = () => {
                        this.renderedPhotoProject = reader.result;
                    }
                } catch (error) {
                    throw new Error("Ошибка при чтении файла");
                }
            },
            addNewWork() {
                this.$validate().then(success =>{
                    if(!success) return;
                    try {
                        const formData = new FormData();

                        Object.keys(this.work).forEach(key => {
                            const value = this.work[key];
                            formData.append(key, value);
                        });
                        
                        $axios.post(baseURL + "/works", formData)
                        .then(response => {
                            console.log(response.data);
                            console.log('Проект добавлен');
                        });
                        
                        this.renderedPhotoProject = "";
                        this.work.photo = {};
                        this.work.title = "";
                        this.work.link = "";
                        this.work.description = "";
                        this.work.techs = [];
                        this.validation.reset();
                        this.addNewWorkPoint = false;

                    } catch (error) {}
                })
            },
            async fetchWorks() {
                try {
                    const response = await $axios.get(baseURL + "/works/255");
                    this.works = response.data;
                    console.log(this.works)
                } catch (error) {}
            },
            editWorkOpenForm(editedWorkObj) {
                this.addNewWorkPoint = true;
                this.editWorkPoint = true;

                this.editedWork = editedWorkObj;
                
                // const tagsEditedArray = editedWorkObj.techs.split(",");
                // this.editedWork.techs = tagsEditedArray;
            },
            async editWork() {
                try {
                    const editCurrentWork = await $axios.post(baseURL + `/works/${this.editedWork.id}`, this.editedWork);
                    this.works = this.works.map(item => {
                        return item.id === this.editedWork.id ? editedWork : item;
                    });
                } catch (error) {
                } finally {
                    this.editWorkPoint = false;
                    this.addNewWorkPoint = false;
                }
            },
            async removeExistedWork(removedItem) {
                try {
                    const responseDel = await $axios.delete(baseURL + `/works/${removedItem.id}`);
                    this.works = this.works.filter(item => item.id !== removedItem.id);
                } catch (error) {}
            },
        }
    }
</script>