<template>
  <!-- Header -->
  <TheHeader @openSidebar="openSidebar" />
  <!-- Small sidebar -->
  <TheSmallSideBar />
  <!-- Sidebar -->
  <TheSideBar />
  <!-- Mobile sidebar -->
  <TheMobileSideBar :isOpen="isSidebarOpen" />
  <!-- Categories -->
  <TheCategories />
  <!-- Videos -->
  <TheVideos />
</template>
<script lang="ts">
import { ref } from "vue";
import TheCategories from "../components/home/TheCategories.vue";
import TheMobileSideBar from "../components/home/TheMobileSideBar.vue";
import TheSideBar from "../components/home/TheSideBar.vue";
import TheSmallSideBar from "../components/home/TheSmallSideBar.vue";
import TheHeader from "../components/home/TheHeader.vue";
import TheVideos from "../components/home/TheVideos.vue";

export default {
  components: {
    TheVideos,
    TheHeader,
    TheSmallSideBar,
    TheSideBar,
    TheMobileSideBar,
    TheCategories,
  },

  setup() {
    const sidebarState = ref<string | null>(null);
    const isSidebarOpen = ref<boolean>(false);
    const isCompactSidebarOpen = ref<boolean>(false);
    const openSidebar = () => {
      isSidebarOpen.value = !isSidebarOpen.value
    }

    const onResize = () => {
      const windowInnerWidth = window.innerWidth;
      if (windowInnerWidth < 768) {
        isCompactSidebarOpen.value = false
        isSidebarOpen.value = false
      } else if (windowInnerWidth < 1280) {
        isCompactSidebarOpen.value = true
        isSidebarOpen.value = false
      }
      isCompactSidebarOpen.value = sidebarState.value === "compact"
      isSidebarOpen.value = sidebarState.value === "normal"
    }

    return {
      isSidebarOpen,
      openSidebar
    }
  }
};
</script>
