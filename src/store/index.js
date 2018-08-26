import Vue from "vue";
import Vuex from "vuex";
import ChuckModule from "./modules/chuck.js";
import TriviakModule from "./modules/trivia.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    chuck: ChuckModule,
    trivia: TriviakModule
  }
});

export default store;
