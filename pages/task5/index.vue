<template>
    <div>
        <h1 class="text-5xl font-mono mb-10">Task 5</h1>
        <form @submit.prevent="">
            <div class="col-3 my-2"><input type="text" class="form-control"></div>

            <button class="btn btn-success">Submit</button>
        </form>

        <table>

        </table>
    </div>
</template>

<script setup>
import { ref } from "vue";
let inputValues

</script>

<style lang="scss" scoped>

</style>