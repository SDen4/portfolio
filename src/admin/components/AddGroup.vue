<template lang="pug">
    ul.admin__group-list
        li.admin__group-item(:class="{'admin__group-item_unActive' : unAct}")
            .admin__group_container
                form.admin__group-new-name-form(@submit.prevent="createGroup") 
                    //-method - addNewCategory
                    label.admin__group-new-name
                        input.admin__group-name-input(v-model="title" type="text" placeholder="Название новой группы")
                    .admin__group-name-buttons
                        button.button__group.button__group_approve(type="submit")
                        button.button__group.button__group_remove(@click="canceAddGroup" type="reset")
        li.admin__group-item(v-for="category in categories" :key="category.id")
            .admin__group_container
                .admin__group-name
                    .admin__group-name-text {{category.category}}
                    .admin__group-name-buttons
                        button.button__group.button__group_remove(@click="deleteExistedGroup" type="button")
                AddSkill(
                    :category="category"
                )

</template>

<script>
//-(v-for="cat in categories" :key="cat.id")
//- {{cat.category}}

// AddSkill(
//     :catSkills="cat.skills",
//     :categoryId="cat.id",
//     @skillAdded="addSkill"
// )
    // import AddSkill from "./AddSkill.vue"
    // import axios from "axios";

    // const baseUrl = "https://webdev-api.loftschool.com";
    // const token = localStorage.getItem("token") || "";
    // const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjI1NSwiaXNzIjoiaHR0cDovL3dlYmRldi1hcGkubG9mdHNjaG9vbC5jb20vbG9naW4iLCJpYXQiOjE1ODEyMjUyMTIsImV4cCI6MTU4MTI0MzIxMiwibmJmIjoxNTgxMjI1MjEyLCJqdGkiOiJTeWk2eHlSSTdzckNIbkJGIn0.veEKtKDPuCx6jDL-pDthJuthe__Dl5lX6EGF9MsgjCY";

    // axios.defaults.baseURL = baseUrl;
    // axios.defaults.headers['Authorization'] = `Bearer ${token}`;
    // localStorage.setItem("token", token);

    import { mapActions, mapState } from "vuex";

    export default {
        data: () => ({
            title: ""
        }),
        props: ["unAct"],
        components: {
            AddSkill: () => import("./AddSkill.vue")
        },
        computed: {
            ...mapState("AddGroup", {categories: state => state.categories})
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
            async deleteExistedGroup() {
                try {
                    console.log("Yess!!!" + this.title);
                    await this.deleteGroup(this.category.id);
                } catch (error) {
                }
            },
            canceAddGroup () {
                this.unAct = true;
            }
        }
    }

</script>