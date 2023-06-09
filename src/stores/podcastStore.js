import { ref } from "vue";
import { defineStore } from "pinia";

export const usePodcastStore = defineStore("podcast", () => {
  const podcast = ref([]);

  async function fetchPodcasts() {
    await fetch(
      "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
    )
      .then((res) => res.json())
      .then((json) => {
        this.podcast = json.feed.entry;
        console.log(podcast);
      });
  }

  return { podcast, fetchPodcasts };
});
