<template>
    <Dialog v-model:visible="visible" modal header="Edit Profile" :style="{ width: '25rem' }" id="filterDialog">
        <template #header>
            <div class="inline-flex align-items-center justify-content-center gap-2">
                <span class="font-bold white-space-nowrap">Filters</span>
            </div>
        </template>
        <div class="flex flex-col space-y-4 p-4 max-w-md mx-auto">
            <Dropdown class="w-full" v-model="selectedCategory" :options="categoriesList" filter optionLabel="name"
                placeholder="Select a Category">
                <template #value="slotProps">
                    <div v-if="slotProps.value" class="flex align-items-center">
                        <img :alt="slotProps.value.label"
                            src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                            :class="`mr-2 flag flag-${slotProps.value.code.toLowerCase()}`" style="width: 18px" />
                        <div>{{ slotProps.value.name }}</div>
                    </div>
                    <span v-else>
                        {{ slotProps.placeholder }}
                    </span>
                </template>
                <template #option="slotProps">
                    <div class="flex align-items-center">
                        <img :alt="slotProps.option.label"
                            src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                            :class="`mr-2 flag flag-${slotProps.option.code.toLowerCase()}`" style="width: 18px" />
                        <div>{{ slotProps.option.name }}</div>
                    </div>
                </template>
            </Dropdown>
            <Dropdown class="w-full" v-model="selectedAuthors" :options="authorsList" filter optionLabel="name"
                placeholder="Select a Auhor">
                <template #value="slotProps">
                    <div v-if="slotProps.value" class="flex align-items-center">
                        <img :alt="slotProps.value.label"
                            src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                            :class="`mr-2 flag flag-${slotProps.value.code.toLowerCase()}`" style="width: 18px" />
                        <div>{{ slotProps.value.name }}</div>
                    </div>
                    <span v-else>
                        {{ slotProps.placeholder }}
                    </span>
                </template>
                <template #option="slotProps">
                    <div class="flex align-items-center">
                        <img :alt="slotProps.option.label"
                            src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                            :class="`mr-2 flag flag-${slotProps.option.code.toLowerCase()}`" style="width: 18px" />
                        <div>{{ slotProps.option.name }}</div>
                    </div>
                </template>
            </Dropdown>
            <Calendar class="w-full" v-model="publishedAt" showIcon />
        </div>

        <template #footer>
            <Button label="Cancel" text severity="secondary" @click="visible = false" autofocus />
            <Button label="Apply" outlined severity="secondary" @click="visible = false" autofocus />
        </template>

    </Dialog>
</template>

<script setup lang="ts">
const visible = defineModel({ type: Boolean });

const selectedCategory = ref();
const selectedAuthors = ref();
const publishedAt = ref();

const filters:ComputedRef<FilterOptions> = computed(()=>{
    return{
        author:selectedAuthors.value?.name??null,
        category:selectedCategory.value?.name??null,
        date:publishedAt.value??null
    }
})
watch(filters,()=>{
    filterOptions.value = filters.value
})
const route = useRoute()
const { authors, categories,filterOptions,navigate, currentNav } = await useNavigation(route)
const categoriesList = computed(() => categories.value.map((cat) => ({ name: cat, code: "A" })))
const authorsList = computed(() => authors.value.map((auth) => ({ name: auth, code: "B" })))


</script>