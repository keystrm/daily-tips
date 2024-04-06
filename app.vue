<template>
  <NuxtLayout>
    <div>
      0
    </div>
    <div>
      1
      <ColorModeSwitch/>
    </div>
    <div class="col-span-2">
      2
      <Card>
            <template #title> Simple Card </template>
            <template #content>
                <p class="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                    quas!
                </p>
            </template>
        </Card>
    </div>

  </NuxtLayout>
</template>

<script setup lang="ts">
</script>
<style>

</style>
