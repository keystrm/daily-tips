<template>
    <Dialog v-model:visible="visible" modal header="Edit Profile" :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
        <template #header>
            <div class="inline-flex align-items-center justify-content-center gap-2">
                <span class="font-bold white-space-nowrap">Filters</span>
            </div>
        </template>
        <ContributionGrid/>
        <Dropdown v-model="selectedCountry" :options="countries" filter optionLabel="name"
            placeholder="Select a Country" class="w-full md:w-14rem">
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
        <Calendar v-model="buttondisplay" showIcon />
        <template #footer>
            <Button label="Cancel" text severity="secondary" @click="visible = false" autofocus />
            <Button label="Apply" outlined severity="secondary" @click="visible = false" autofocus />
        </template>

    </Dialog>
</template>

<script setup lang="ts">
const visible = defineModel({ type: Boolean });
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