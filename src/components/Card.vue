<script setup lang="ts">
import { ref } from "vue";
import { ImageData, LikeResult, toggleLike } from "../service/api.service";

const { image } = defineProps<{
  image: ImageData;
}>();

const showError = ref(false);

const isImageLiked = ref(false);
const likeImage = async () => {
  const result = await toggleLike(!isImageLiked.value, image.id);
  if (result === LikeResult.OK) {
    isImageLiked.value = !isImageLiked.value;
  } else {
    showError.value = true;
    setTimeout(() => {
      showError.value = false;
    }, 1500);
  }
};
</script>

<template>
  <div class="card">
    <div class="card-inner">
      <div class="card-error" :class="{ visible: showError }">
        An error occurred. Please try again.
      </div>
      <div class="card-action" @click="likeImage">
        <div v-if="isImageLiked" class="unlike">💔</div>
        <div v-else class="like">❤️</div>
      </div>
      <img :src="image.url" alt="image" />
      <div class="card-info">
        <div>{{ image.description }}</div>
        <div>💕 {{ isImageLiked ? image.likes + 1 : image.likes }}</div>
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
  position: relative;
}
.card-inner img {
  width: 100%;
  opacity: 1;
  height: auto;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.card-info {
  min-height: 40px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
}

.card-action {
  position: absolute;
  right: 0;
  top: 0;
  width: 10vh;
  height: 10vh;
  text-align: right;
  padding-right: 0.5rem;
}
.card-action > div {
  width: 100%;
}

.card-action .like,
.card-action .unlike {
  zoom: 2;
  cursor: pointer;
}

@media (min-width: 360px) {
  .card-action .like,
  .card-action .unlike {
    zoom: 3;
  }
}

.card-error {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: red;
  justify-content: center;
  align-items: center;
  color: white;
  z-index: 1000;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.card-error.visible {
  display: flex;
}
</style>
