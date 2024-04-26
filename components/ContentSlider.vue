<template>
    <SlideButton icon="pi pi-arrow-left" @click="navigate('previous')" />
    <Card class="overflow-y-auto" pt:body:class="mark-down p-5">
        <template #title> {{ currentNav?.title }} </template>
        <template #content>
            <slot></slot>
        </template>
    </Card>
    <SlideButton icon="pi pi-arrow-right" @click="navigate('next')" />
</template>

<script setup lang="ts">

const route = useRoute()
const {navigate,currentNav} = await useNavigation(undefined,route)

</script>