<template>
    <div class="sm:px-20 sm:py-2">
        <header>
            <nav class=" mx-auto flex justify-between text-base p-3">
                <div>
                    <ul class="flex sm:gap-2 gap-2 md:gap-8">
                        <li>
                            <NuxtLink to="/">First version </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/second-version">Second version</NuxtLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        <div class="p-2">
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