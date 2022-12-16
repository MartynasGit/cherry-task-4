<template>
    <div>
        <h1 class="text-5xl font-mono">First form version</h1>
        <div class="flex">
            <div class="my-5 col-8">
                <form>
                    <div class="col-7">
                        <div class="my-2">
                            <label for="name" class="font-bold form-check">Your Name:</label>
                            <input type="text" v-model="name" id="name" class="form-control">
                        </div>
                        <div class="my-2">
                            <label for="email" class="font-bold form-check">Your Email:</label>
                            <input type="email" v-model="email" id="email" class="form-control">
                        </div>
                        <div class="form-check my-2">
                            <label class="font-bold">Pick your vehicle</label><br>
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" v-model="vehicle"
                                class="form-check-input">
                            <label for="vehicle1"> I have a bike</label><br>
                            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" v-model="vehicle"
                                class="form-check-input">
                            <label for="vehicle2"> I have a car</label><br>
                            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" v-model="vehicle"
                                class="form-check-input">
                            <label for="vehicle3"> I have a boat</label><br>
                        </div>
                        <div class="form-check my-2">
                            <label class="font-bold">Pick your programing language</label><br>
                            <input type="radio" id="html" name="fav_language" value="HTML" v-model="language"
                                class="form-check-input">
                            <label for="html">HTML</label><br>
                            <input type="radio" id="css" name="fav_language" value="CSS" v-model="language"
                                class="form-check-input">
                            <label for="css">CSS</label><br>
                            <input type="radio" id="javascript" name="fav_language" value="JavaScript"
                                v-model="language" class="form-check-input">
                            <label for="javascript">JavaScript</label>
                        </div>
                        <div>
                            <label for="cars" class="font-bold form-check">Choose a car:</label>
                            <select name="cars" id="cars" v-model="carModel" class="form-select">
                                <option disabled value="">Select your prefered car model</option>
                                <option value="Lambo">Lambo</option>
                                <option value="Bugatti">Bugatti</option>
                                <option value="Mercedes">Mercedes</option>
                                <option value="Audi">Audi</option>
                            </select>
                        </div>
                        <div class="form-floating my-3">
                            <textarea id="comment" name="w3review" rows="4" cols="50" v-model="comments"
                                class="form-control"></textarea>
                            <label for="comment" class="form-check font-bold">Comments:</label>
                        </div>
                    </div>
                </form>
            </div>

            <div>
                <p><span class="font-bold">User name:</span> {{ name }}</p>
                <p><span class="font-bold">User email:</span> {{ email }}</p>
                <p><span class="font-bold">User vehicle:</span> <span v-for="(v, index) in vehicle">{{ index !==
                        (vehicle.length - 1) ? `${v}, ` : v
                }} </span></p>
                <p><span class="font-bold">User language:</span> {{ language }}</p>
                <p><span class="font-bold">User car model:</span> {{ carModel }}</p>
                <p><span class="font-bold">User comments:</span> {{ comments }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            vehicle: [],
            language: '',
            carModel: '',
            comments: ''
        }
    }
}

</script>

<style  scoped>

</style>