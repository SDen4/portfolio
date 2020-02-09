<template lang="pug">
    .admin__skills-item(v-if="editmode === false")
        .admin__skills-name {{skill.title}}
        .admin__skills-percent {{skill.percent}}%
        .admin__skills-edit-buttons
            button.button_edit(type="button" @click="editmode = true")
            button.button_remove(type="button" @click="removeExistedSkill")
    .admin__skills-item(v-else)
        input.admin__skills-name(type="text" placeholder="Введите навык" v-model="editedSkill.title")
        input.admin__skills-percent(type="text" placeholder="100%" v-model="editedSkill.percent")
        .admin__skills-edit-buttons
            button.button_edit(type="button" @click="editmode = false")
            button.button__group.button__group_approve.button__group_approve_skill(type="button" @click="editExistedSkill")
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            loading: false,
            editmode: false,
            editedSkill: {...this.skill}
        }
    },
    props: {
        skill: {
            type: Object,
            default: () => {},
            required: true
        }
    },
    methods: {
        ...mapActions("skills", ["removeSkill", "editSkill"]),
        async removeExistedSkill() {
            try {
                await this.removeSkill(this.skill);
            } catch (error) {
            }
        },
        async editExistedSkill() {
            try {
            await this.editSkill(this.editedSkill);
            this.editmode = false;
            } catch (error) {
            }
        }
    }
}
</script>

<style lang="pcss">
.blocked {
    opacity: .5;
    filter: grayscale(100%);
    pointer-events: none;
    user-select: none;
}
</style>