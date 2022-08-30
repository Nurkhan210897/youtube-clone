<template>
  <main class="md:ml-24 xl:ml-64 pt-32 px-5 pb-5">
    <div
      class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-screen-2xl m-auto"
    >
      <TheVideo />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import TheVideo from "./TheVideo.vue";
import Http from "../../services/main";
interface items {
  etag: string;
  items: object[];
  kind: string;
  nextPageToken: string;
  pageInfo: {
    resultsPerPage: number;
    totalResults: number;
  };
}
export default defineComponent({
  components: {
    TheVideo,
  },

  setup() {
    const videos = ref([] as items[]);

    onMounted(async () => {
      videos.value = await Http.get<items>();
    });
  },
});
</script>

<style></style>
