<template>
    <div class="flex">
        <SlideButton icon="pi pi-arrow-left" @click="previousNote"/>
        <Card>
            <template #title> Simple Card </template>
            <template #content>
                <slot></slot>
            </template>
        </Card>
        <SlideButton icon="pi pi-arrow-right" @click="nextNote"/>

    </div>
</template>

<script setup lang="ts">
import type { NavItem } from '@nuxt/content/types';

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())

const flattenArray = (data: NavItem[]): { title: string; _path: string; }[] =>{
    let result: { title: string; _path: string; }[] = [];

    data.forEach(item => {
        result.push({ title: item.title, _path: item._path });
        if (item.children && item.children.length > 0) {
            result = result.concat(flattenArray(item.children));
        }
    });

    return result;
}

const nextNote = () => {
    if(navigation.value){
        const articleList = flattenArray(navigation.value)
        console.log(articleList)
    }
}
const previousNote = () => {
    
}
</script>