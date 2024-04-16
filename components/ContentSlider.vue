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
    let uniquePaths = new Set<string>();

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

    addItems(data);
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