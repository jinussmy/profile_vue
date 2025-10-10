<template>
    <NuxtLayout>
          <NuxtPage />
    </NuxtLayout>
</template>
<script setup lang="ts">
const title = ref('PROFILE vue/nuxt');
const description = ref('남진우 개발자 프로필입니다.')
useHead({
    title,
    meta: [{name:'description', content:description}]
});
</script>