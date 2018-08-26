import { trivia } from "./../../services/TriviaService";

const state = {
  trivias: []
};

const mutations = {
  addTriviaToState(state, trivias) {
    state.trivias = trivias;
  }
};

const actions = {
  fetchTrivias(context) {
    trivia.getRandomTrivias().then(response => {
      context.commit("addTriviaToState", response.data);
    });
  }
};

const getters = {
  getAllTrivias(state) {
    return state.trivias;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
