<template lang="pug">
    ul.admin__group-list
        li.admin__group-item(:class="{'admin__group-item_unActive' : unAct}")
            .admin__group_container
                form.admin__group-new-name-form(@submit.prevent="createGroup") 
                    label.admin__group-new-name
                        input.admin__group-name-input(
                            v-model="title"
                            type="text"
                            placeholder="Название новой группы"
                        )
                    .admin__group-name-buttons
                        button.button__group.button__group_approve(type="submit")
                        button.button__group.button__group_remove(@click="canceAddGroup" type="reset")
        li.admin__group-item(v-for="(category, currentIndex) in categories" :key="category.id")
            .admin__group_container
                .admin__group-name
                    .admin__group-name-text {{category.category}}
                    .admin__group-name-buttons
                        button.button__group.button__group_remove(@click="deleteExistedGroup(category.id)" type="button")
                AddSkill(
                    :category="category"
                )
</template>

<script>
    import { mapActions, mapState } from "vuex";


    export default {
        data() {
            return {
                title: "",
            }
        },
        props: {
            unAct: {
                type: Boolean
            },
            category: {
                type: Object,
                default: () => {}
            }
        },
        components: {
            AddSkill: () => import("./AddSkill.vue")
        },
        computed: {
            ...mapState("AddGroup", {categories: state => state.categories}),
        },
        created() {
            this.fetchCategories();
        },
        methods: {
            ...mapActions("AddGroup", ["addGroup", "fetchCategories", "deleteGroup"]),
            async createGroup() {
                try {
                    await this.addGroup(this.title);
                    this.unAct = true;
                } catch (error) {
                    alert("Пожалуйста, зарегистрируйтесь и повторите попытку")
                }
            },
            async deleteExistedGroup(idOfDeletedCategory) {
                try {
                    await this.deleteGroup(idOfDeletedCategory);
                } catch (error) {}
            },
            canceAddGroup () {
                this.unAct = true;
            }
        }
    }
</script>