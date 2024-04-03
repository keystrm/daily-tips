<template>
    <div class="items-center flex">
        <span class="pi text-black dark:text-white text-xl" :class="'pi-'+icon"></span>
    </div>
</template>
<script setup lang="ts">
defineProps<{
    icon:string
}>();
</script>