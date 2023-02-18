<template>
    <button class="mr-3 sm:ml-2 sm:mr-6 focus:outline-none">
        <SvgSprite :symbol="icon" class="w-6 h-6" />
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
      icon: { 
        type: String,
        default: "help"
      }  
    }

}
</script>

<style>

</style>