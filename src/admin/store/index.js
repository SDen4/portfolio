import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import myself from './modules/myself.js';
import AddGroup from './modules/AddGroup.js';
import skills from './modules/Skills.js'


export const store = new Vuex.Store({
    modules: {
        myself,
        AddGroup,
        skills
    }
});