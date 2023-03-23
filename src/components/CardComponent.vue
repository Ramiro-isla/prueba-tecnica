<script setup>
const props = defineProps({
  title: {
    type: Number,
    default: null,
  },
});
</script>
<template>
  <div class="card-container">
    <img :src="props.image" :alt="props.image" />
  <div class="text-container">
    <h2>{{props.name}}</h2>
    <p>Author:NPR</p>
  </div>
  </div>
</template>
<style lang="scss" scoped>
@import "../assets/sass/CardComponent.scss";
</style>
