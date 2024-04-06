<template>
  <NuxtLayout>
    <div class="md:max-w-2xl">
      <div class="flex flex-col md:flex-row gap-2 my-3 md:justify-end">
        <Button icon="pi pi-filter" aria-label="Filter" />
        <ColorModeSwitch />
      </div>
      <div class="">
        <ContentSlider />
      </div>
    </div>

  </NuxtLayout>
</template>

<script setup lang="ts">
const selectedCountry = ref();
const buttondisplay = ref();
const countries = ref([
  { name: 'Australia', code: 'AU' },
  { name: 'Brazil', code: 'BR' },
  { name: 'China', code: 'CN' },
  { name: 'Egypt', code: 'EG' },
  { name: 'France', code: 'FR' },
  { name: 'Germany', code: 'DE' },
  { name: 'India', code: 'IN' },
  { name: 'Japan', code: 'JP' },
  { name: 'Spain', code: 'ES' },
  { name: 'United States', code: 'US' }
]);
</script>
<style></style>
