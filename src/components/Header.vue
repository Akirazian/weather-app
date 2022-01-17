<template>
  <header>
    <img :src="`${publicPath}logo2.png`" alt="logo">
    <div class="search-bar">
      <input type="text" placeholder="Enter a city" @keydown.enter="search()" v-model="searchValue" id="search-input">
      <button @click="search()" class="button-59">Search</button>
    </div>
    <button @click="this.$emit('toggleUnit')" class="button-59">C / F</button>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      searchValue: '',
      publicPath: process.env.BASE_URL
    }
  },
  methods: {
    search() {
      if(!this.searchValue) { 
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

  img {
    width: 250px;
    height: auto;
  }

  .button-59 {
    align-items: center;
    background-color: #fff;
    border: 2px solid #000;
    box-sizing: border-box;
    margin-left: 5px;
    color: #000;
    cursor: pointer;
    display: inline-flex;
    fill: #000;
    font-size: 16px;
    font-weight: 600;
    height: 48px;
    justify-content: center;
    letter-spacing: -.8px;
    line-height: 24px;
    outline: 0;
    padding: 0 7px;
    text-align: center;
    text-decoration: none;
    transition: all .3s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    max-width: 200px;
  }

  .button-59:focus {
    color: #171e29;
  }

  .button-59:hover {
    border-color: #8D6C9F;
    color: #8D6C9F;
    fill: #8D6C9F;
  }

  .button-59:active {
    border-color: #8D6C9F;
    color: #8D6C9F;
    fill: #8D6C9F;
  }

  @media (min-width: 768px) {
    .button-59 {
      min-width: 170px;
    }
  }

  header {
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    background: #746F72;
    color: whitesmoke;
    justify-content: space-evenly;
    align-items: center;
    padding: 20px;
  }

  input {
    min-width: 400px;
    padding: 5px;
    font-size: 12pt;
    color: rgb(107, 107, 107)
  }

  @media only screen and (max-width: 768px) {
    header {
      flex-direction: column;
    }

    .search-bar {
      margin-bottom: 8px;
    }
  }

  @media only screen and (max-width: 425px) {
    input {
      min-width: 100px;
    }
  }

  h2 {
    font-size: 1.7rem;
  }

  .search-bar {
    display: flex;
    justify-content: center;
  }

  .temp-unit-button {
    margin: 15px;
    font-size: 12pt;
    padding: 10px 20px
  }

</style>>