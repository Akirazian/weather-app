<template>
  <header>
    <h1>{{ cityName }}</h1>
    <input type="text">
    <button @click="onClick()" class="search-btn">Search</button>  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    cityName: String,
  },
  methods: {
    onClick() {
      console.log("Clicked!")
    }
  }
}
</script>

<style scoped>
  header {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }

  input {
    margin-bottom: 15px;
    min-width: 300px;
  }

</style>>