<template>
    <div>
        <h1 class="text-5xl font-mono mb-10">Task 5</h1>
        <Input />

        <ul v-for="i in formData.submitedData">
            <li><NuxtLink :to="`/task5/${i.text}`">{{i.text}}</NuxtLink></li>
        </ul>
    </div>
</template>

<script setup>
import { useInputStore } from '@/stores/slug-input';
const formData = useInputStore();


</script>

<style lang="scss" scoped>

</style>