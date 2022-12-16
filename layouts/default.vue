<template>
    <div class="sm:px-20 sm:py-2">
        <header>
            <nav class=" mx-auto flex justify-between text-base p-1 ">
                <div>
                    <ul class="flex sm:gap-2 gap-2 md:gap-8 text-lg">
                        <li>
                            <NuxtLink to="/">First version </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/second-version">Second version</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/task5">Task 5</NuxtLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        <div class="p-1">
            <slot></slot>
        </div>
    </div>
</template>
<style>
.router-link-exact-active {
    color: #b0695c;
}
</style>

<script setup>
</script>