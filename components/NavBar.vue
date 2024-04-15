<template>
    <nav>
        <ContentNavigation v-slot="{ navigation }">
            <ul>
                <li v-for="link of navigation" :key="link._path">
                    <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
                </li>
            </ul>
        </ContentNavigation>
    </nav>
</template>
<script setup>
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
console.log('navigation', navigation.value)
const { data } = await useAsyncData('page', () => queryContent('/').findOne())

const {
  navBottomLink,
  navDirFromPath,
  navPageFromPath,
  navKeyFromPath
} = useContentHelpers()
const route = useRoute()

const bottomPath = navBottomLink(navigation.value)
const dir = navDirFromPath(route.path, navigation.value)
const page = navPageFromPath(route.path, navigation.value)
const layout = navKeyFromPath(route.path, 'layout', navigation.value)

</script>