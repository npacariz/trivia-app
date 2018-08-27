<template>
      <nav  v-if="numberOfPages > 1">
    <ul class="pagination">
      <li 
        class="page-item"
        :class="{ 'active': currentPage === page }"
        v-for="page in numberOfPages"
        :key="page"
      >
        <a class="page-link" @click="selectPage(page)">{{ page }}</a>
      </li>
    </ul>
  </nav>
  
</template>

<script>
export default {
  props: ["currentPage", "numberOfPages"],
  data() {
    return {};
  },
  methods: {
    selectPage(page) {
      this.$emit("selected-page", page);
    }
  }
};
</script>
<style scoped>
</style>
