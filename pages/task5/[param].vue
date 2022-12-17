<template>
    <div>
        <Title>{{ param }}</Title>
        <h1 class="text-5xl font-mono mb-10">{{ param }}</h1>
    </div>
</template>

<script setup>
const { param } = useRoute().params;

</script>

<style scoped>

</style>
