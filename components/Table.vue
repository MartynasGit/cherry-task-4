<template>
    <div>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Vehicle</th>
                    <th scope="col">Programing language</th>
                    <th scope="col">Car</th>
                    <th scope="col">Comments</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody v-for="item in formData.submitedData">
                <tr>
                    <td>{{ (item.id) }}</td>
                    <td>{{ (item.name) }}</td>
                    <td>{{ (item.email) }}</td>
                    <td><span v-for="(v, index) in item.vehicle">
                            {{ index !==
                                    (item.vehicle.length - 1) ? `${v}, ` : v
                            }} </span>
                    </td>
                    <td>{{ (item.language) }}</td>
                    <td>{{ (item.carModel) }}</td>
                    <td>{{ (item.comments) }}</td>
                    <td><button class="btn btn-danger" @click="formData.delete(item.id)">Delete</button></td>
                </tr>
            </tbody>

        </table>
    </div>
</template>

<script setup>
import { useFormStore } from '@/stores/form';
const formData = useFormStore();
</script>

<style scoped>

</style>