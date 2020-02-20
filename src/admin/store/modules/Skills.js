export default {
    namespaced: true,
    actions: {
        async addSkill({commit}, skill) {
            try {
                const {data} = await this.$axios.post("/skills", skill);
                commit("AddGroup/ADD_SKILL", data, {root: true});
            } catch (error) {
            }
        },
        async removeSkill({commit}, skill) {
            try {
                const {data} = await this.$axios.delete(`skills/${skill.id}`);
                commit("AddGroup/REMOVE__SKILL", skill, {root: true});
            } catch (error) {
            }
        },
        async editSkill({commit}, editedSkill) {
            try {
                const {data: {skill}} = await this.$axios.post(`skills/${editedSkill.id}`, editedSkill);
                commit("AddGroup/EDIT__SKILL", skill, {root: true});
            } catch (error) {
            }
        }
    }
}