<template>
  <main class="md:ml-24 xl:ml-64 pt-32 px-5 pb-5">
    <div
      class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-screen-2xl m-auto"
    >
      <TheVideo
        v-for="(video, index) in items"
        :key="index"
        :video="video"
      />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import TheVideo from "./TheVideo.vue";
import Http from "../../services/main";
import { videos } from "./types/g.types";

export default defineComponent({
  components: {
    TheVideo,
  },

  setup() {
    const videos = ref<videos[]>([]);
    const items = ref([]);

    onMounted(async () => {
      try {
        videos.value = await Http.get<videos>();
        items.value = await videos.value.items.map((video) => {
          return {...video, ...video.snippet};
        });
        console.log(items.value);
        
      } catch (error) {
        console.log(error);
      }
    });

    return {
      videos,
      items
    };
  },
});
</script>

<style></style>
