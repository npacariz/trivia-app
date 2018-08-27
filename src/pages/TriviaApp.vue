<template>
  <div class="TriviaApp">
    <h1>Trivia Questions</h1>
    <select  @change="getTriviasCategories" v-model="selectedCategory">
       <option value="">--Select a categories--</option>
      <option v-for="category in categories" :key="category.id" :value="category.id">{{category.title}}</option>
    </select>
    <div v-for="trivia in paginatedTrivias" :key="trivia.id">
      <single-trivia :trivia="trivia"></single-trivia>
    </div>
    <custom-pagination :numberOfPages="numberOfPages" :currentPage="currentPage" @selected-page="setCurrentPage"></custom-pagination>
  </div>
</template>

<script>
import SingleTrivia from "./../components/SingleTrivia";
import CustomPagination from "./../components/CustomPagination";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "TriviaApp",
  components: {
    SingleTrivia,
    CustomPagination
  },
  data() {
    return {
      selectedCategory: "",
      currentPage: 1
    };
  },
  methods: {
    ...mapActions({
      fetchTrivias: "fetchTrivias",
      featchCategories: "featchCategories",
      featchTriviasOfCategory: "featchTriviasOfCategory"
    }),
    getTriviasCategories() {
      this.featchTriviasOfCategory(this.selectedCategory);
    },
    setCurrentPage(page) {
      this.currentPage = page;
    }
  },
  computed: {
    ...mapGetters({
      trivias: "getAllTrivias",
      categories: "getCategories"
    }),
    numberOfPages() {
      return Math.ceil(this.trivias.length / 5);
    },
    paginatedTrivias() {
      let bottomLimit = (this.currentPage - 1) * 5;
      let topLimit = bottomLimit + 5;
      return this.trivias.filter((trivia, index) => {
        return index >= bottomLimit && index < topLimit;
      });
    }
  },

  created() {
    this.fetchTrivias();
    this.featchCategories();
  }
};
</script>
<style scoped>
</style>
