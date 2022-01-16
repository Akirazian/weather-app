<template>
  <div class="current-forecast">
    <h2>{{current.name}}</h2>
    <p>{{current.date}}</p>
    <p>{{current.time}}</p>
    <h3>{{current.weather.description}}</h3>
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
}
</script>

<style scoped>
  .current-forecast {
    display: flex;
    flex-direction: column;
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
    margin: 10px
  }

  h1 {
    margin: 5px;
    font-size: 4rem;
  }
</style>