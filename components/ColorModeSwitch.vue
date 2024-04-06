<template>
    <Button rounded outlined :icon="colorMode.preference === 'light'?'pi pi-moon':'pi pi-sun'" @click="chnageColorMode" />
</template>

<script setup lang="ts">
const colorMode = useColorMode()
const chnageColorMode = () => {
    if(colorMode.preference === 'light'){
        colorMode.preference = 'dark'
    }
    else{
        colorMode.preference = 'light'
    }
}
</script>