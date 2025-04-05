<script setup lang="ts">
import { ImageData } from "../service/api.service";

const { image } = defineProps<{
  image: ImageData;
}>();
</script>

<template>
  <div class="card">
    <div class="card-inner">
      <img :src="image.url" alt="image" />
      <div class="card-info">
        <div>{{ image.description }}</div>
        <div>💕 {{ image.likes }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 100%;
}

.card-inner {
  border: 1px solid darkgrey;
  border-radius: 10px;
}
.card-inner img {
  width: 100%;
  height: auto;
}

.card-info {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
}
</style>
