<template>
  <div class="TriviaApp">
    <h1>Trivia Questions</h1>
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
  methods: {
    ...mapActions({
      fetchTrivias: "fetchTrivias"
    })
  },
  computed: {
    ...mapGetters({
      trivias: "getAllTrivias"
    })
  },
  created() {
    this.fetchTrivias();
  }
};
</script>
<style scoped>
</style>
