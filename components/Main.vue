<template>
    <UContainer class="min-h-screen flex items-center">
        <UPopover :popper="{ placement: 'bottom-start' }">
            <UButton icon="i-heroicons-calendar-days-20-solid" :label="format(date, 'd MMM, yyy')" />

            <template #panel="{ close }">
            <DatePicker v-model="date" is-required @close="close" />
            </template>
        </UPopover>
        <UCard class="flex-1"
            :ui="{ background: 'bg-gray-50 dark:bg-gray-800/50', ring: 'ring-1 ring-gray-300 dark:ring-gray-700', divide: 'divide-y divide-gray-300 dark:divide-gray-700', header: { base: 'font-bold' } }">
            <template #header>
                Test content
            </template>

            <p class="text-gray-500 dark:text-gray-400">
                Can I still push
            </p>

        </UCard>
    </UContainer>
</template>

<script setup>
import { format } from 'date-fns'

const date = ref(new Date())

</script>

<style>
body {
    @apply antialiased font-sans text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-900;
}
</style>