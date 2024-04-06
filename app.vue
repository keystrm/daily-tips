<template>
  <NuxtLayout>
    <div class="md:max-w-2xl">
      <div class="flex flex-row gap-2 my-3 justify-end">
        <Button icon="pi pi-filter" aria-label="Filter" @click="filterVisible = !filterVisible" />
        <ColorModeSwitch />
      </div>
      <div class="">
        <ContentSlider />
      </div>
    </div>

  </NuxtLayout>

  <FilterDialog v-model="filterVisible" />
</template>

<script setup lang="ts">

const filterVisible = ref<boolean>(false)

</script>
<style></style>
