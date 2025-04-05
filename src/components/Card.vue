<script setup lang="ts">
import { ref } from "vue";
import { ImageData, LikeResult, toggleLike } from "../service/api.service";

const { image } = defineProps<{
  image: ImageData;
}>();

const isImageLiked = ref(false);
const likeImage = async () => {
  const result = await toggleLike(!isImageLiked.value, image.id);
  if (result === LikeResult.OK) {
    isImageLiked.value = !isImageLiked.value;
  }
};
</script>

<template>
  <div class="card">
    <div tabindex="0" class="card-inner" @click="likeImage">
      <img :src="image.url" alt="image" />
      <div class="card-info">
        <div class="card-info-text">
          <div>{{ image.description }}</div>
          <div>💕 {{ isImageLiked ? image.likes + 1 : image.likes }}</div>
        </div>
        <div class="card-info-action">
          <span>click to {{ isImageLiked ? "unlike" : "like" }} </span>
        </div>
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
  opacity: 1;
  height: auto;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.card-inner:hover {
  img {
    opacity: 0.9;
  }
  .card-info-text {
    display: none;
  }
  .card-info-action {
    display: flex;
  }
}

.card-info {
  min-height: 40px;
}

.card-info-text {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
}

.card-info-action {
  display: none;
  justify-content: center;
  padding: 0.5rem 1rem;
  width: 100%;
}
.card-info-action::before {
  content: "❤️";
  margin-right: 0.5rem;
}
</style>
