<template>
  <main class="md:ml-24 xl:ml-64 pt-32 px-5 pb-5">
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-screen-2xl m-auto">
      <TheVideo v-for="(video, index) in items" :key="index" :video="video" />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import TheVideo from "./TheVideoItem.vue";
import Http from "../../services/main";
import { videoPayload, videoItem } from "@/types/g.types";

export default defineComponent({
  components: {
    TheVideo,
  },
  setup() {
    const videos = ref<videoPayload>();
    const items = ref<videoItem[]>([]);
    onMounted(async () => {
      try {
        videos.value = await Http.get<videoPayload>();

        items.value = await videos.value.items.map((video: any) => ({
          ...video, ...video.snippet
        }));
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

<style>

</style>
