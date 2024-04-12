<template>
    <div class="flex">
        <SlideButton icon="pi pi-arrow-left"/>
        <Card>
            <template #title> Simple Card </template>
            <template #content>
                <slot></slot>
            </template>
        </Card>
        <SlideButton icon="pi pi-arrow-right"/>

    </div>
</template>