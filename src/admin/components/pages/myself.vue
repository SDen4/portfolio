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