<template>
  <header class="flex justify-between fixed bg-white top-0 z-30 w-full">
    <div class="lg:w-1/4 flex">
      <div class="flex items-center xl:w-64 xl:bg-white pl-4">
        <button class="mr-3 sm:ml-2 sm:mr-6 focus:outline-none" @click="openSidebar">
          <SvgSprite symbol="ellipsis_horizontal" class="w-6 h-6" />
        </button>
        <a href="#">
          <SvgSprite class="w-20 h-14" symbol="logo" />
        </a>
      </div>
    </div>
    <div
      class="hidden sm:flex items-center justify-end p-2.5 pl-8 md:pl-12 md:px-8 flex-1 lg:px-0 lg:w-1/2 max-w-screen-md">
      <div class="flex w-full h-full">
        <input type="text" placeholder="Search"
          class="w-full px-3 shadow-inner rounded-bl-sm rounded-tl-sm border border-gray-300 focus:border-blue-700 focus:outline-none" />
        <button
          class="focus:outline-none flex items-center px-6 py-1 text-gray-600 bg-gray-100 border border-l-0 border-gray-300 rounded-tr-sm rounded-br-sm hover:bg-gray-200">
          <SvgSprite class="w-5 h-5" symbol="search" />
        </button>
      </div>
      <button class="ml-4 focus:outline-none">
        <SvgSprite class="w-5 h-5" symbol="micro" />
      </button>
    </div>
    <div class="flex items-center justify-end lg:w-1/4 sm:space-x-3 p-2 sm:px-4">
      <button class="sm:hidden p-2 focus:outline-none">
        <SvgSprite class="w-5 h-5" symbol="micro" />
      </button>
      <button class="sm:hidden p-2 focus:outline-none">
        <SvgSprite class="w-5 h-5" symbol="search" />
      </button>
      <button class="relative group p-2 focus:outline-none">
        <SvgSprite class="w-5 h-5" symbol="menu" />
        <BaseDropdown :sections="menuCategories.categories" />
      </button>
      <button class="relative group p-2 focus:outline-none">
        <SvgSprite class="w-5 h-5" symbol="ellipsis_vertical" />
        <BaseDropdown :sections="menuCategories.options" />
      </button>
      <button
        class="focus:outline-none flex items-center whitespace-nowrap px-2 py-1 text-sm text-blue-700 uppercase border border-blue-700 rounded-sm"
        @click="openModal">
        <SvgSprite class="mr-2 w-7 h-7" fill="currentColor" symbol="signin" />
        Sign In
      </button>
    </div>
  </header>
  <Modal v-if="isModal" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Modal from '../baseComponents/modal.vue'
import BaseDropdown from '../baseComponents/baseDropdown.vue'
import { menuCategories } from "@/utils/index"

export default defineComponent({
  components: { Modal, BaseDropdown },
  emits: {
    openSidebar: () => {
      return Boolean;
    }
  },
  setup(_, { emit }) {
    const openSidebar = () => emit("openSidebar");

    const isModal = ref<boolean>(false)
    const openModal = () => {
      isModal.value = !isModal.value;
    }
    console.log("menuCategories", menuCategories);


    return {
      isModal,
      menuCategories,
      // methods
      openSidebar,
      openModal
    };
  },
})
</script>
