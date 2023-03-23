<script setup>
import { usePodcastStore } from "../stores/podcastStore";
import { onBeforeMount } from "vue";

const store = usePodcastStore();
onBeforeMount(async() => {
  await store.fetchPodcasts();
});
</script>

<template>
  <main>
    <h1>HomeView</h1>
  </main>
</template>
