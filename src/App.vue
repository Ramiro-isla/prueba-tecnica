<script setup>
import { RouterLink, RouterView } from "vue-router";
import HeaderComponent from "./components/HeaderComponent.vue";
import CardComponent from "./components/CardComponent.vue";
import { usePodcastStore } from "../src/stores/podcastStore";
import { onBeforeMount } from "vue";

const store = usePodcastStore();

onBeforeMount(async () => {
  await store.fetchPodcasts();
});
</script>

<template>
  <!-- <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav> -->
  <HeaderComponent />
  <div
    class="content-podcasts"
    v-for="podcast in store.podcast"
    :key="podcast"
  >
    <CardComponent
      :id="podcast.id"
      :image="podcast.image"
      :name="podcast.name"
    />
  </div>
  <RouterView />
</template>

<style scoped></style>
