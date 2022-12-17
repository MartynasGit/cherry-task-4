<template>
    <div>
        <Title>{{ param }}</Title>
        <h1 class="text-5xl font-mono mb-10">{{ param }}</h1>
        <NuxtLink to="/task5" class="btn btn-primary">Go back..</NuxtLink>
    </div>
</template>

<script setup>
const { param } = useRoute().params;

</script>

<style scoped>

</style>
