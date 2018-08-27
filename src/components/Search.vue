<template>
  <div >
            <input class="form-control mr-sm-2" @input='serachTerm' type="search" placeholder="Search" aria-label="Search">
    
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  methods: {
    serachTerm() {
      this.$store.dispatch("getingSearchTerm", event.target.value);
    }
  }
};
</script>
<style scoped>
</style>
