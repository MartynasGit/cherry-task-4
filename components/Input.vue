<template>
    <div>
        <form @submit.prevent="handleSubmit()">
            <div class="col-5 my-2">
                <input type="text" class="form-control" required v-model="inputValue" placeholder="Your slug name here">
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