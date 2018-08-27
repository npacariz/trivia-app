import { trivia } from "./../../services/TriviaService";

const state = {
  trivias: [],
  categories: [],
  searchTerm: ""
};

const mutations = {
  addTriviaToState(state, trivias) {
    state.trivias = trivias;
  },
  addCategoriesToState(state, categories) {
    state.categories = categories;
  },
  changinSearchTerm(state, value) {
    state.searchTerm = value;
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
  },
  getingSearchTerm(context, value) {
    context.commit("changinSearchTerm", value);
  }
};

const getters = {
  getAllTrivias(state) {
    return state.trivias.filter(trivia => {
      return trivia.question
        .toLowerCase()
        .match(state.searchTerm.toLowerCase());
    });
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
