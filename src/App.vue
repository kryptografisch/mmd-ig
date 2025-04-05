<script setup lang="ts">
import Cards from "./components/Cards.vue";
</script>

<template>
  <header>Random Image Gallery <span>powered by MadeMyDay</span></header>

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

header span {
  padding-left: 2vw;
  font-size: 0.65rem;
  margin-top: 0.5vh;
}
</style>
