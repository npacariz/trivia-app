import { trivia } from "./../../services/TriviaService";

const state = {
  trivias: [],
  categories: []
};

const mutations = {
  addTriviaToState(state, trivias) {
    state.trivias = trivias;
  },
  addCategoriesToState(state, categories) {
    state.categories = categories;
  }
};

const actions = {
  fetchTrivias(context) {
    trivia.getRandomTrivias().then(response => {
      context.commit("addTriviaToState", response.data);
    });
  },
  featchCategories(context) {
    trivia.getCategories().then(response => {
      context.commit("addCategoriesToState", response.data);
    });
  },
  featchTriviasOfCategory(context, id) {
    trivia.getTriviasOfCategory(id).then(response => {
      context.commit("addTriviaToState", response.data.clues);
    });
  }
};

const getters = {
  getAllTrivias(state) {
    return state.trivias;
  },
  getCategories(state) {
    return state.categories;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
