<template>
    <Button :icon="props.icon" pt:root:class="align-bottom bg-primary-500 border border-primary-500 cursor-pointer dark:bg-primary-400 dark:border-primary-400 dark:focus:ring-primary-300/50 dark:hover:bg-primary-300 dark:hover:border-primary-300 dark:text-surface-900 duration-200 ease-in-out focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 hover:bg-primary-600 hover:border-primary-600 inline-flex items-center justify-center leading-[normal] overflow-hidden p-0 px-4 py-3 relative select-none text-center text-white transition w-12"/>
</template>
<script setup lang="ts">
const props = withDefaults(defineProps<{
  icon: string
}>(), {
  icon: ''
})

</script>