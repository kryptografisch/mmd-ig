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
  <div class="cards">
    <div v-if="images.length === 0 && !api_error">Loading...</div>
    <div v-if="api_error !== null">
      An error occurred: <code>{{ api_error }}</code
      ><br />Please try reloading.
    </div>
    <div v-for="image in images" :key="image.id">
      <Card :image="image"></Card>
    </div>
  </div>
</template>

<style scoped>
.cards {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem 0.25rem;
}
</style>
