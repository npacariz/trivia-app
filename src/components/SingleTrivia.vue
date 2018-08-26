<template>
  <div class="TriviaApp">
    <div class="container">
        <div class="jumbotron">
            <h5>{{trivia.question}}</h5>
            <h5 v-if='showAnswer'> Answer: {{trivia.answer}}</h5>
            <button @click="seeAnswer()">View answer</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    trivia: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showAnswer: false
    };
  },
  methods: {
    seeAnswer() {
      this.showAnswer = !this.showAnswer;
    }
  }
};
</script>
<style scoped>
</style>
