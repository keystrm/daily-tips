<template>
    <div class="flex">
        <SlideButton icon="pi pi-arrow-left" @click="navigate('previous')"/>
        <Card>
            <template #title> {{ currentNav?.title }} </template>
            <template #content>
                <slot></slot>
            </template>
        </Card>
        <SlideButton icon="pi pi-arrow-right" @click="navigate('next')"/>

    </div>
</template>

<script setup lang="ts">
interface NavComponent {
    title: string,
    _path: string
}

import type { NavItem } from '@nuxt/content/types';

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
const route = useRoute()

const navigationList = computed(() => {
  const result: NavComponent[] = [];
  const uniquePaths = new Set<string>();

  function addItems(items: NavItem[]) {
    items.forEach(item => {
      const itemKey = `${item.title}|${item._path}`;
      if (!uniquePaths.has(itemKey)) {
        result.push({ title: item.title, _path: item._path });
        uniquePaths.add(itemKey);
      }
      if (item.children && item.children.length > 0) {
        addItems(item.children);
      }
    });
  }

  if (navigation.value) {
    addItems(navigation.value);
  }
  
  return result;
});

const currentNav = computed(()=>{
    return navigationList.value.find((item)=>item._path===route.path)
})
const currentNavIndex = computed(()=>{
    return navigationList.value.findIndex((item)=>item._path===route.path)
})

const navigate = (direction :'next'|'previous'):void => {
    if(currentNavIndex.value && currentNavIndex.value !== -1){
        if(direction === 'next' && currentNavIndex.value+1 < navigationList.value.length){
            console.log(navigationList.value)
            navigateTo(navigationList.value[currentNavIndex.value+1]._path)
        }
        else if(direction === 'previous' && currentNavIndex.value - 1 >= 0){
            navigateTo(navigationList.value[currentNavIndex.value -1]._path)
        }
    }
}

</script>