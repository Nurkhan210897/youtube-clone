<template>
  <div class="opacity-0 group-hover:opacity-100 absolute top-9 right-0 sm:left-0 bg-white w-60 border border-t-0">
    <section class="py-2 border-b" v-for="(section, index) in sections" :key="index">
      <ul>
        <li v-for="(item, index) in section" :key="index">
          <a href="#" class="flex items-center px-3 py-2 text-sm hover:bg-gray-100">
            <SvgSprite class="w-6 h-6 mr-3 text-red-500" :symbol="item.symbol" />
            <span>{{ item.text }}</span>
            <SvgSprite class="w-5 h-5 text-gray-400 ml-auto" symbol="chevron_right" v-if="item.chevron" />
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';
import { ISection } from "@/types/g.types"

export default defineComponent({
  props: {
    sections: {
      type: Array as PropType<ISection[]>,
      default: (() => [])
    },
    chevron: {
      type: Boolean,
      default: false
    }
  },

  setup(props) {
    const sections = computed(() => {
      if (props.sections) {
        return Object.values(
          props.sections?.reduce((prevEl: any[], currentEl) => {
            const key: any = currentEl.section || "default";
            (prevEl[key] = prevEl[key] || []).push(currentEl);
            return prevEl
          }, [])
        )
      }
    });

    return {
      sections
    }
  }
})
</script>

<style>

</style>
