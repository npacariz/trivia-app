import Vue from 'vue'
import Vuex from 'vuex'
import ChuckModule from './modules/chuck.js'


Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        chuck: ChuckModule
    }

})
    

export default store