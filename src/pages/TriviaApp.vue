<template>
  <div class="TriviaApp">
    <h1>Trivia Questions</h1>
    <select  @change="getTriviasCategories" v-model="selectedCategory">
       <option value="">--Please choose an option--</option>
      <option v-for="category in categories" :key="category.id" :value="category.id">{{category.title}}</option>
    </select>
    <div v-for="trivia in trivias" :key="trivia.id">
      <single-trivia :trivia="trivia"></single-trivia>
    </div>
    
  </div>
</template>

<script>
import SingleTrivia from "./../components/SingleTrivia";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "TriviaApp",
  components: {
    SingleTrivia
  },
  data() {
    return {
      selectedCategory: ""
    };
  },
  methods: {
    ...mapActions({
      fetchTrivias: "fetchTrivias",
      featchCategories: "featchCategories",
      featchTriviasOfCategory: "featchTriviasOfCategory"
    }),
    getTriviasCategories() {
      console.log(this.selectedCategory);
      this.featchTriviasOfCategory(this.selectedCategory);
    }
  },
  computed: {
    ...mapGetters({
      trivias: "getAllTrivias",
      categories: "getCategories"
    })
  },

  created() {
    this.fetchTrivias();
    this.featchCategories();
  }
};
</script>
<style scoped>
</style>
