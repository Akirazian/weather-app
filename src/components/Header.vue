<template>
  <header>
    <h2>Alec's Weather App</h2>
    <div class="search-bar">
      <input type="text" placeholder="Enter a city" @keydown.enter="search()" v-model="searchValue" id="search-input">
      <button @click="search()" class="search-button">Search</button>
    </div>
    <button @click="this.$emit('toggleUnit')" class="temp-unit-button">C / F</button>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      searchValue: '',
    }
  },
  methods: {
    search() {
      if(!this.searchValue) { 
        alert('input a city!');
        return; 
      }
    
    const city = this.searchValue;
    this.$emit('search', city);

    this.searchValue = '';
    }
  }
}
</script>

<style scoped>
  header {
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    background: rgb(73, 73, 73);
    color: whitesmoke;
    justify-content: space-evenly;
    align-items: center;
    padding: 20px;
  }

  .search-bar {
    display: flex;
    justify-content: center;
    width: 40%;
    min-width: 300px;
  }

  input {
    width: 100%;
    padding: 5px;
    font-size: 12pt;
    color: rgb(107, 107, 107)
  }

  .temp-unit-button {
    margin: 15px;
    font-size: 12pt;
    padding: 10px 20px
  }

</style>>