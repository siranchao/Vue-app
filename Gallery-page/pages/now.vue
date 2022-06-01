<template>
    <div class="container">
        <h1>Hello, current time is: {{ time }}</h1>
    </div>

</template>


<script setup>
const time = await $fetch('/api/now')

</script>