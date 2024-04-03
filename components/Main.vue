<template>
    <div class="min-h-screen flex flex-col items-center justify-center space-y-4 bg-gray-100 dark:bg-gray-800 p-4">
        <!-- Placeholder for Date picker -->
        <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
            <p class="text-gray-900 dark:text-gray-100">Date picker</p>
        </div>

        <!-- Placeholder for Category -->
        <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
            <p class="text-gray-900 dark:text-gray-100">Category</p>
        </div>

        <!-- Placeholder for Color mode switch -->
        <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow flex justify-between items-center">
            <p class="text-gray-900 dark:text-gray-100">Color mode switch</p>
            <ButtonColorModeSwitcher/>
        </div>

        <!-- Main content -->
        <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow text-center">
            <p class="text-3xl font-bold underline text-gray-900 dark:text-gray-100">Main content</p>
        </div>

        <!-- Additional components (e.g., Terminal, Card) -->
        <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
            <!-- Card Component Placeholder -->
            <div class="mt-4">
                <Card>
                    <template #title> Simple Card </template>
                    <template #content>
                        <p class="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error
                            repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa
                            ratione quam perferendis esse, cupiditate neque
                            quas!
                        </p>
                    </template>
                </Card>
            </div>
        </div>

        <!-- Displaying Current Color Mode -->
        <!-- <h1 class="text-gray-900 dark:text-gray-100">Color mode: {{ $colorMode.value }}</h1> -->
    </div>
</template>


<script setup lang="ts">

const colorMode = useColorMode()
console.log(colorMode.preference)

onMounted(() => {

if (colorMode.preference === 'system') {
    colorMode.preference = colorMode.value
}

})
</script>

<style></style>