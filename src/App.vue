<script setup lang="ts">
import Cards from "./components/Cards.vue";
</script>

<template>
  <header>made my day image gallery</header>

  <main>
    <Cards />
  </main>
</template>

<style scoped>
header {
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid darkgrey;
  min-height: 5vh;
}
</style>
