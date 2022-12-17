<template>
    <div>
        <h1 class="text-5xl font-mono mb-10">Task 5</h1>
        <Input />
        <div class="mt-10 col-3">
            <ul class="list-group">
                <li class="list-group-item list-group-item-action pb-1" v-for="i in formData.submitedData">
                    <NuxtLink :to="`/task5/${i.text}`">{{ i.text }}</NuxtLink>
                    <button class="btn btn-danger float-right p-1 px-3" @click="formData.delete(i.id)">Delete</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { useInputStore } from '@/stores/slug-input';
const formData = useInputStore();


</script>

<style lang="scss" scoped>

</style>