<template>
    <div>
        <h1 class="text-5xl font-mono">Second form version</h1>
        <div class="my-3 ">
            <Form></Form>
        </div>
        <div v-if="formData.submitedData.length !== 0">
            <Table></Table>
        </div>
    </div>
</template>

<script setup>
import { useFormStore } from '@/stores/form';
const formData = useFormStore();
</script>

<style  scoped>

</style>