<template lang="pug">
    .admin__block-myself
        .admin__title
            h2.admin__title-name Блок "Обо мне"
            .admin__add-group
                .button__add_cont
                    button.button__add(@click="unActive")
                .admin__add-text Добавить группу
        .admin__data
            add-group(
                :unAct = "unAct"
            )
            //- li.admin__group-item
            //-     .admin__group_container
            //-         .admin__group-name
            //-             .admin__group-name-text Frontend
                        
                        //- form.admin__group-new-name-form
                        //-     label.admin__group-new-name
                        //-         input.admin__group-name-input(name="group-name", placeholder="Название новой группы")
                        //-     .admin__group-name-buttons
                        //-         button.button__group.button__group_approve(type="submit")
                        //-         button.button__group.button__group_remove(type="reset")
            //- li.admin__group-item
            //-     .admin__group_container
            //-         .admin__group-name
            //-             .admin__group-name-text.admin__group-name-text_active Workflow
            //-             //- form.admin__group-new-name-form
            //-                 label.admin__group-new-name
            //-                     input.admin__group-name-input(name="group-name", placeholder="Название новой группы")
            //-                 .admin__group-name-buttons
            //-                     button.button__group.button__group_approve(type="submit")
            //-                     button.button__group.button__group_remove(type="reset")
            //-         .admin__skills
            //-             ul.admin__skills-list
            //-                 li.admin__skills-item
            //-                     .admin__skills-name Git
            //-                     .admin__skills-percent 100%
            //-                     .admin__skills-edit-buttons
            //-                         button.button_edit
            //-                         button.button_remove
            //-         form.admin__skills-add
            //-             label.admin__skills-new-skill
            //-                 input.admin__skills-new(name="skill-name", placeholder="Новый навык")
            //-             label.admin__skills-new-persent
            //-                 input.admin__skills-setPercent(name="skill-percent", placeholder="100 %")
            //-             .admin__skills-buttons
            //-                 button.button__add.button__add_skill
            //- li.admin__group-item
            //-     .admin__group_container
            //-         .admin__group-name
            //-             .admin__group-name-text
            //-             form.admin__group-new-name-form
            //-                 label.admin__group-new-name
            //-                     input.admin__group-name-input(name="group-name", placeholder="Название новой группы")
            //-                 .admin__group-name-buttons
            //-                     button.button__group.button__group_approve(type="submit")
            //-                     button.button__group.button__group_remove(type="reset")
            //-         .admin__skills
            //-             ul.admin__skills-list
            //-                 li.admin__skills-item
            //-                     .admin__skills-name
            //-                     .admin__skills-percent
            //-                     .admin__skills-edit-buttons
            //-                         //- button.button_edit
            //-                         //- button.button_remove
            //-         form.admin__skills-add
            //-             label.admin__skills-new-skill
            //-                 input.admin__skills-new(name="skill-name", placeholder="Новый навык")
            //-             label.admin__skills-new-persent
            //-                 input.admin__skills-setPercent(name="skill-percent", placeholder="100 %")
            //-             .admin__skills-buttons
            //-                 button.button__add.button__add_skill
</template>

<script>
    import AddGroup from '../AddGroup.vue';

    export default {
        data: () => ({
            unAct: true
        }),
        components: {
            AddGroup
        },
        methods: {
            unActive() {
                this.unAct = false;
            }
        }


    }
</script>