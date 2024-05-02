<template>
  <NuxtLayout>
    <div class="md:max-w-2xl flex flex-col h-100 justify-center">
      <div class="flex flex-row gap-2 my-3 justify-end">
        <Button label="New" @click="createNewNote" />
        <Button icon="pi pi-filter" aria-label="Filter" @click="filterVisible = !filterVisible" />
        <ColorModeSwitch />
      </div>
      <div class="flex flex-1 mb-4 overflow-hidden">
        <ContentSlider>
          <NuxtPage/>
        </ContentSlider>
      </div>
    </div>

  </NuxtLayout>

  <FilterDialog v-model="filterVisible" />
</template>

<script setup lang="ts">

const filterVisible = ref<boolean>(false)
const createNewNote = () => {
  
}

</script>
<style></style>
