<script setup lang="ts">
import { onMounted } from "vue";
import { ref } from "vue";
import { ImageData, getImageData } from "../service/api.service";

const images = ref<ImageData[]>([]);

onMounted(async () => {
  try {
    const data = await getImageData();
    console.log(`Loaded ${data.length} images`);
    images.value = data;
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <div class="cards">
    <div v-for="image in images" :key="image.id">
      {{ image.id }}
      {{ image.description }}
    </div>
  </div>
</template>

<style scoped>
.cards {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
