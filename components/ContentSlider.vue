<template>
    <div class="flex">
        <SlideButton icon="pi pi-arrow-left"/>
        <Card>
            <template #title> Simple Card </template>
            <template #content>
                <ContentDoc />
            </template>
        </Card>
        <SlideButton icon="pi pi-arrow-right"/>

    </div>
</template>