import { chuck } from "../../services/ChuckService.js";

const state = {
  chuckJoks: {}
};
const mutations = {
  setJoks(state, data) {
    state.chuckJoks = data;
  }
};
const actions = {
  async getJoksChunk(context, value) {
    let resolve = await chuck.getAll(value);
    context.commit("setJoks", resolve);
    return resolve;
  }
};

const getters = {
  getJok(state) {
    return state.chuckJoks;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
