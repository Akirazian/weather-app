<template>
  <div class="current-forecast">
    <h2>{{current.name}}</h2>
    <p>{{current.date}}</p>
    <p>{{current.time}}</p>
    <img :src="`${publicPath}${current.weatherIcon}`" alt="">
    <h3>{{current.weather_description}}</h3>
    <h1 class="temp">{{current.temp}}° {{unit}}</h1>
    <p>Feels like: {{current.feels_like}}°</p>
  </div>
</template>

<script>
export default {
  name: "Current",
  props: {
    current: Object,
    unit: String
  },
  data () {
    return {
      publicPath: process.env.BASE_URL  //Per Vue 3's Docs, used to link to the public folder for dynamic image path handling
    }
  }
}
</script>

<style scoped>
  .current-forecast {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    width: 100px;
    height: 100px;
  }

  .temp {
  white-space: nowrap;
  overflow: hidden;
  }

  h2 {
    margin: 0px;
    font-size: 2rem;
  }

  p {
    margin: 5px;
  }

  h3 {
    font-size: 20pt;
    font-weight: 500;
    margin: 10px;
    white-space: nowrap;
    overflow: hidden;
  }

  h1 {
    margin: 5px;
    font-size: 4rem;
  }
</style>