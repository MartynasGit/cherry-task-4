<template>
    <div>
        <form @submit.prevent="handleSubmit()">
            <div class="col-3 my-2">
                <input type="text" class="form-control" required v-model="inputValue">
            </div>
            <button class="btn btn-success">Submit</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useInputStore } from '@/stores/slug-input';
const formData = useInputStore();
let inputValue = ref("");

const handleSubmit = () => {
    formData.addData(inputValue.value);
}

</script>

<style scoped>

</style>