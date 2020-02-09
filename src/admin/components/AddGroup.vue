<template lang="pug">
    ul.admin__group-list
        li.admin__group-item
            .admin__group_container
                //- .admin__group-name
                //-     .admin__group-name-text {{category.category}}
                form.admin__group-new-name-form(@submit.prevent="createGroup") 
                    //-method - addNewCategory
                    label.admin__group-new-name
                        input.admin__group-name-input(v-model="title" type="text" placeholder="Название новой группы")
                    .admin__group-name-buttons
                        button.button__group.button__group_approve(type="submit")
                        button.button__group.button__group_remove(type="reset")
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
                } catch (error) {
                    alert("Пожалуйста, зарегистрируйтесь и повторите попытку")
                }
                
                // axios
                // .post("/categories?token=", {
                //     title: this.title
                // }).then(response => {
                //     this.categories.unshift(response.data)
                // })
            },
            async deleteExistedGroup() {
                try {
                    await this.deleteGroup(this.category.id);
                } catch (error) {
                }
            }
            // fetchCategories() {
            //     axios.get("/categories/255").then(response => {
            //         this.categories = response.data
            //     })
            // },
            // addSkill(newSkill) {
            //     this.categories = this.categories.map(category => {
            //         if (category.id === newSkill.category) {
            //             category.skills.push(newSkill);
            //         }
            //         return category;
            //     })
            //     console.log(newSkill);
            // }
        }
    }

</script>