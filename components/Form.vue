<template>
    <div>
        <form @submit.prevent="handleSubmit(event)">
            <div class="col-4">
                <div class="my-2">
                    <label for="name" class="font-bold form-check">Your Name:</label>
                    <input type="text" v-model="formInputData.name" id="name" class="form-control" required>
                </div>
                <div class="my-2">
                    <label for="email" class="font-bold form-check">Your Email:</label>
                    <input type="email" v-model="formInputData.email" id="email" class="form-control" required>
                </div>
                <div class="form-check my-2">
                    <label class="font-bold">Pick your vehicle</label><br>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" v-model="formInputData.vehicle"
                        class="form-check-input">
                    <label for="vehicle1"> I have a bike</label><br>
                    <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" v-model="formInputData.vehicle"
                        class="form-check-input">
                    <label for="vehicle2"> I have a car</label><br>
                    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" v-model="formInputData.vehicle"
                        class="form-check-input">
                    <label for="vehicle3"> I have a boat</label><br>
                </div>
                <div class="form-check my-2">
                    <label class="font-bold">Pick your programing language</label><br>
                    <input type="radio" id="html" name="fav_language" value="HTML" v-model="formInputData.language"
                        class="form-check-input">
                    <label for="html">HTML</label><br>
                    <input type="radio" id="css" name="fav_language" value="CSS" v-model="formInputData.language"
                        class="form-check-input">
                    <label for="css">CSS</label><br>
                    <input type="radio" id="javascript" name="fav_language" value="JavaScript"
                        v-model="formInputData.language" class="form-check-input">
                    <label for="javascript">JavaScript</label>
                </div>
                <div>
                    <label for="cars" class="font-bold form-check">Choose a car:</label>
                    <select name="cars" id="cars" v-model="formInputData.carModel" class="form-select" required>
                        <option disabled value="">Select your prefered car model</option>
                        <option value="Lambo">Lambo</option>
                        <option value="Bugatti">Bugatti</option>
                        <option value="Mercedes">Mercedes</option>
                        <option value="Audi">Audi</option>
                    </select>
                </div>
                <div class="form-floating my-3">
                    <textarea id="comment" rows="4" cols="50" v-model="formInputData.comments"
                        class="form-control"></textarea>
                    <label for="comment" class="form-check font-bold">Comments:</label>
                </div>
            </div>
            <button class="btn btn-primary">Add</button>
        </form>
    </div>
</template>

<script setup>
import { useFormStore } from '@/stores/form';
import { ref } from "vue";

const formData = useFormStore();
let formInputData = ref({
    name: "",
    email: "",
    vehicle: [],
    language: "",
    carModel: "",
    comments: "",
});

const handleSubmit = (event) => {
    formData.addData(formInputData.value);
    this.formInputData.name = "names"
}
</script>

<style scoped>

</style>