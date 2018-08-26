<template>
  <div class="TriviaApp">
    <div class="container">
    <div class="jumbotron">
    <h1>Chuck Jok</h1> 
    <p>{{jok.value}}</p> 
    <input type="text" placeholder="Serach..." v-model="category"> <br>
    <button class='btn btn-success' @click='getNewJok()'>Get new joke</button>
  </div>
</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import store from "./../store/index.js";
export default {
  name: "TriviaApp",
  data() {
    return {
      category: ""
    };
  },
  methods: {
    ...mapActions({
      getJoks: "getJoksChunk"
    }),
    getNewJok() {
      this.getJoks(this.category);
    }
  },

  computed: {
    ...mapGetters({
      jok: "getJok"
    })
  },

  beforeRouteEnter(to, from, next) {
    store.dispatch("getJoksChunk").then(() => {
      next();
    });
  }
};
</script>
<style scoped>
</style>
