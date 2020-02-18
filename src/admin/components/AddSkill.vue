<template lang="pug">
    .admin__skills_container
        .admin__skills
            ul.admin__skills-list
                skill-item(
                    v-for="skill in category.skills"
                    :key="skill.id"
                    :skill="skill"
                )
        form.admin__skills-add(
            @submit.prevent="addNewSkill"
            :class={blocked: loading}
        )
            label.admin__skills-new-skill
                input.admin__skills-new(v-model="skill.title" placeholder="Новый навык")
            label.admin__skills-new-persent
                input.admin__skills-setPercent(v-model="skill.percent" placeholder="100 %")
            .admin__skills-buttons
                button.button__add.button__add_skill(
                    type="submit"
                    :disabled="loading"
                    :class={blocked: loading}
                )
</template>

<script id="add-skill">
    import { mapActions } from 'vuex';

    export default {
        name: 'AddSkill',
        components: {
            skillItem: ()=> import('./skill-item.vue')
        },
        props: {
            category: {
                type: Object,
                default: () => {},
                required: true
            }
        },
        data() {
            return {
                loading: false,
                skill: {
                    title: "",
                    percent: 0,
                    category: this.category.id
                }
            }
        },
        methods: {
            ...mapActions("skills", ["addSkill"]),
            async addNewSkill() {
                this.loading = true;
                try {
                    await this.addSkill(this.skill);
                    this.skill.title = "";
                    this.skill.percent = "";
                } catch (error) {
                } finally {
                    this.loading = false;
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