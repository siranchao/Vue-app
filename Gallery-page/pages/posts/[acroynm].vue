<template>
    <div class="container">
        <h2>{{ post.acroynm }}</h2>
        <p>{{ post.explication }}</p>
        <NuxtLink to="/"> Back to Main</NuxtLink>
    </div>

</template>


<script setup>
console.log(`rendering acroynm page!!`)
const route = useRoute()
console.log(route)
const post = await $fetch(`/api/posts/${route.params.acroynm}`)

</script>