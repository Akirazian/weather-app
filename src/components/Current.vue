<template>
  <div class="current-forecast">
    <h2>{{current.name}}</h2>
    <p>{{current.date}}</p>
    <p>{{current.time}}</p>
    <h3>{{current.weather.main}}</h3>
    <h1>{{current.temp}}° F</h1>
  </div>
</template>

<script>
export default {
  name: "Current",
  props: {
    current: Object,
  },
}
</script>

<style scoped>
  .current-forecast {
    display: flex;
    flex-direction: column;
    margin: 20px;
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