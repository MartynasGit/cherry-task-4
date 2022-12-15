<template>
    <div>
        <h1>First form version</h1>
        <div>
            <form>
                <label for="name">Your Name</label>
                <input type="text" v-model="name" id="name">
            </form>
        </div>
        
        <div>
            <p>User name: {{ name }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            email: ''
        }
    }
}

</script>

<style  scoped>

</style>