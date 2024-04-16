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
interface NavComponent {
    title: string,
    _path: string
}

import type { NavItem } from '@nuxt/content/types';

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
const route = useRoute()

const flattenArray = (data: NavItem[]): NavComponent[] =>{
    let result: NavComponent[] = [];
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

const getNextNode = (flatArray: NavComponent[], currentPath: string): NavComponent | null =>{
    const currentIndex = flatArray.findIndex(item => item._path === currentPath);
    if (currentIndex === -1 || currentIndex + 1 >= flatArray.length) {
        return null;
    }
    return flatArray[currentIndex + 1];
}

const getPreviousNode = (flatArray: NavComponent[], currentPath: string): NavComponent | null =>{
    const currentIndex = flatArray.findIndex(item => item._path === currentPath);
    if (currentIndex === -1 || currentIndex - 1 < 0) {
        return null;
    }
    return flatArray[currentIndex - 1];
}

const nextNote = () => {
    if(navigation.value){
        const articleList = flattenArray(navigation.value)
        const nextNode = getNextNode(articleList,route.path)

        if(nextNode){
            navigateTo(nextNode._path)
        }        
    }
}
const previousNote = () => {
    if(navigation.value){
        const articleList = flattenArray(navigation.value)
        const previousNode = getPreviousNode(articleList,route.path)

        if(previousNode){
            navigateTo(previousNode._path)
        }        
    }
}
</script>