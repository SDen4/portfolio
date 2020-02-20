import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import AddGroup from './modules/AddGroup.js';
import skills from './modules/Skills.js'
import user from './modules/user.js'


export const store = new Vuex.Store({
    modules: {
        AddGroup,
        skills,
        user
    }
});