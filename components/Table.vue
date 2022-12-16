<template>
    <div>
        <table class="table table-hover">
            <thead>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Vehicle</th>
                <th scope="col">Programing language</th>
                <th scope="col">Car</th>
                <th scope="col">Comments</th>
                <th scope="col">Actions</th>
            </thead>
            <tbody v-for="item in formData.submitedData">
                <tr>
                    <td>{{(item.value.name)}}</td>
                    <td>{{(item.value.email)}}</td>
                    <td>{{(item.value.vehicle)}}</td>
                    <td>{{(item.value.language)}}</td>
                    <td>{{(item.value.carModel)}}</td>
                    <td>{{(item.value.comments)}}</td>
                    <td>Delete</td>
                </tr>
            </tbody>

        </table>
    </div>
    <div>{{formData.submitedData}}</div>
</template>

<script setup>
import { useFormStore } from '@/stores/form';
const formData = useFormStore();
</script>

<style scoped>

</style>