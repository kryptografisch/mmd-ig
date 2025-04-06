<script setup lang="ts">
import { onMounted } from "vue";
import { ref } from "vue";
import { ImageData, getImageData } from "../service/api.service";
import Card from "./Card.vue";

const images = ref<ImageData[]>([]);
const api_error = ref<string | null>(null);

onMounted(async () => {
  try {
    const data = await getImageData();
    console.log(`Loaded ${data.length} images`);
    images.value = data;
  } catch (error) {
    api_error.value = error as string;
  }
});
</script>

<template>
  <div class="cards" :class="{ empty: images.length === 0 || api_error }">
    <div v-if="images.length === 0 && !api_error">Loading...</div>
    <div v-if="api_error !== null">
      An error occurred: <code>{{ api_error }}</code
      ><br />Please try reloading.
    </div>
    <div class="card-items">
      <Card v-for="image in images" :key="image.id" :image="image"></Card>
    </div>
  </div>
</template>

<style scoped>
.cards.empty {
  min-height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-items {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem 0.25rem;
  justify-content: flex-start;
}

.card-items > * {
  flex: 0 1 100%;
  min-width: 0;
}

@media (min-width: 576px) {
  .card-items > * {
    flex: 0 1 calc(50% - 0.5rem);
  }
}

@media (min-width: 768px) {
  .card-items > * {
    flex: 0 1 calc(33.333% - 0.67rem);
  }
}
</style>
