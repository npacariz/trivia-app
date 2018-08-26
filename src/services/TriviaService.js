import axios from "axios";

export default class Trivia {
  constructor() {
    axios.defaults.baseURL = "http://jservice.io/api";
  }

  getRandomTrivias() {
    return axios.get("random?count=30");
  }

  getCategories() {
    return axios.get("categories?count=10");
  }

  getTriviasOfCategory(id) {
    return axios.get(`category?id=${id}`);
  }
}

export const trivia = new Trivia();
