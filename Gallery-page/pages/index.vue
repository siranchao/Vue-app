<template>
    <h1>Hello World - Main Index</h1>
    <div class="container">
        <ul>
            <li v-for="post in posts" class="list">
                <NuxtLink :to="'/posts/' + post.acroynm">{{ post.acroynm }}</NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script setup>
const { posts } = await $fetch('/api/posts')
</script>