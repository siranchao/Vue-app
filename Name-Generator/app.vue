<script setup lang="ts">

import { Gender, Popularity, Length, names } from '@/data'

interface OptionState {
  gender: string;
  popularity: string;
  length: string;
}

const options = reactive<OptionState>({
  gender: "",
  length: "",
  popularity: "",
})

const selectedNames = ref<string[]>([])

const computeName = () => {
  const filterNames = names
    .filter(name => name.gender === options.gender)
    .filter(name => name.popularity === options.popularity)
    .filter(name => {
      if (options.length === Length.ALL) return true;
      else return name.length === options.length
    })

  selectedNames.value = filterNames.map(name => name.name)
}

const optionsArr = [
  {
    title: "1. Choose a gender",
    category: "gender",
    button: [Gender.GIRL, Gender.BOY, Gender.UNISEX]
  },
  {
    title: "2. Choose the name's popularity",
    category: "popularity",
    button: [Popularity.TRENDY, Popularity.UNIQUE]
  },
  {
    title: "3. Choose the name's length",
    category: "length",
    button: [Length.LONG, Length.SHORT, Length.ALL]
  }
]

const removeName = (index: number) => {
  const filteredNames = [...selectedNames.value];
  filteredNames.splice(index, 1);
  selectedNames.value = filteredNames;
};
</script>


<template>
  <div class="container">
    <h1>Baby Name Generator</h1>
    <h3>Choose your options and click the botton below</h3>

    <div class="options-container">
      <Option v-for="option in optionsArr" :key="option.title" :option="option" :options="options" />
      <button @click="computeName" class="primary">Find Name</button>
    </div>


    <div class="cards-container">
      <CardName v-for="(name, index) in selectedNames" :key="name" :name="name" @remove="() => removeName(index)"
        :index="index" />
    </div>
  </div>
</template>


<style scoped>
.container {
  font-family: Arial, Helvetica, sans-serif;
  color: rgb(27, 60, 138);
  max-width: 50rem;
  margin: 0 auto;
  text-align: center;
}

h1 {
  font-size: 3rem;
}

.options-container {
  background-color: rgb(255, 238, 236);
  border-radius: 2rem;
  padding: 1rem;
  width: 95%;
  margin: 0 auto;
  margin-top: 4rem;
  position: relative;
}

.primary {
  background-color: rgb(249, 87, 89);
  color: white;
  border-radius: 6.5rem;
  border: none;
  padding: 0.75rem 4rem;
  font-size: 1rem;
  margin-top: 1rem;
  cursor: pointer;
}

.cards-container {
  display: flex;
  margin-top: 3rem;
  flex-wrap: wrap;
}
</style>