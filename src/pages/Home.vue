<template>
  <!-- Header -->
  <TheHeader />
  <!-- Small sidebar -->
  <TheSmallSideBar />
  <!-- Sidebar -->
  <TheSideBar />
  <!-- Mobile sidebar -->
  <TheMobileSideBar />
  <!-- Categories -->
  <TheCategories />
  <!-- Videos -->
  <TheVideos />
</template>
<script lang="ts">
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
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
