import { chuck }  from '../../services/ChuckService.js'

const state = {
    chuckJoks: {}
}
const mutations = {
    setJoks(state, data){
        state.chuckJoks = data
    }
}
const actions = {
    getJoksChunk(context, value) {
        chuck.getAll(value).then(response => {
            context.commit('setJoks', response)
        })
    }
};

const getters = {
    getJok(state) {
        return state.chuckJoks
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}