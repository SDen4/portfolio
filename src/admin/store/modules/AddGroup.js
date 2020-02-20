export default {
    namespaced: true,
    state: {
        categories: []
    },
    mutations: {
        SET_GROUPS: (state, data) => state.categories = data,
        ADD_CATEGORY: (state, category) => state.categories.unshift(category),
        ADD_SKILL: (state, newSkill) => {
            state.categories = state.categories.map(category => {
                if(category.id === newSkill.category) {
                    category.skills.push(newSkill);
                }
                return category;
            })
        },
        REMOVE__SKILL: (state, deletedSkill) => {
            const removeSkillInCategory = category => {
                category.skills = category.skills.filter(
                    skill => skill.id !== deletedSkill.id
                );
            };
            const findCategory = category => {
                if(category.id === deletedSkill.category) {
                    removeSkillInCategory(category);
                };
                return category;
            };
            state.categories = state.categories.map(findCategory);
        },
        EDIT__SKILL: (state, editedSkill) => {
            const editSkillInCategory = category => {
                category.skills = category.skills.map(skill => {
                    return skill.id === editedSkill.id ? editedSkill : skill;
                });
            };
            const findCategory = category => {
                if(category.id === editedSkill.category) {
                    editSkillInCategory(category);
                };
                return category;
            };
            state.categories = state.categories.map(findCategory);
        },
        DELETE__GROUP: (state, deletedCategoryId) => {
            const deleteGroup = categories => {
                categories = categories.filter(
                    category => category.id !== deletedCategoryId
                );
            };
            const findGroup = category => {
                if(category.id === deletedCategoryId) {
                    deleteGroup(category);
                };
                return category;
            };
            state.categories = state.categories.map(findGroup);
        }
    },
    actions: {
        async addGroup({commit}, title) {
            try {
                const {data} = await this.$axios.post("/categories", { title });
                commit("ADD_CATEGORY", data);
                    //.then(response => {this.categories.unshift(response.data)});
                // const response = this.$axios.post("/categories?token=", {title: this.title})
                    //.then(response => {this.categories.unshift(response.data)})
            } catch (error) {
                throw new Error(
                    error.response.data.error || error.response.data.message
                );
            }
        },
        async fetchCategories({commit}) {
            try {
                const {data} = await this.$axios.get("/categories/255");
                console.log(data);
                commit("SET_GROUPS", data);
            } catch (error) {
            }
        },
        async deleteGroup({commit}, deletedCategoryId) {
            try {
                const { data } = await this.$axios.delete(`/categories/${deletedCategoryId}`);
                commit("DELETE__GROUP", data);
            } catch (error) {
            }
        }
    }
};