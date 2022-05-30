<template>
    <div class="option-container">
        <h4>{{ option.title }}</h4>
        <div class="option-buttons">
            <button class="option" v-for="(value, index) in option.button" :key="value"
                @click="options[option.category] = value" :class="computeButtonClass(value, index)">
                {{ value }}
            </button>
        </div>
    </div>
</template>


<script setup lang="ts">
import { Gender, Length, Popularity } from '@/data';

interface OptionProps {
    option: {
        title: string;
        category: string;
        button: Gender[] | Popularity[] | Length[]
    },
    options: {
        gender: Gender,
        length: Length,
        popularity: Popularity,
    }
}

const props = defineProps<OptionProps>()

const computeButtonClass = (value, index) => {
    const className = []
    if (props.options[props.option.category] === value) {
        className.push("option-active")
    }
    if (index === 0) className.push("option-left")
    if (index === props.option.button.length - 1) className.push("option-right")
    return className.join(" ")
}
</script>

<style scoped>
.option-container {
    margin-bottom: 2rem;
}

.option {
    background: white;
    outline: 0.15rem solid rgb(249, 87, 89);
    border: none;
    padding: 0.75rem;
    width: 12rem;
    font-size: 1rem;
    color: rgb(27, 60, 138);
    cursor: pointer;
    font-weight: 200;
}

.option-left {
    border-radius: 1rem 0 0 1rem;
}

.option-right {
    border-radius: 0 1rem 1rem 0;
}

.option-active {
    background-color: rgb(249, 87, 89);
    color: white;
}
</style>