<template>
  <div class="day-forecast">
    <div class="day">{{day.day}}</div>
    <div class="weather">{{day.weather.main}}</div>
    <div class="rain-chance">{{day.rainChance}}%</div>
    <div class="humidity">{{day.humidity}}%</div>
    <div class="temp">H: {{day.max}}°  L: {{day.min}}°</div>
  </div>
</template>

<script>
export default {
  name: 'Day',
  props: {
    day: Object,
    unit: String
  }
}
</script>

<style scoped>
  .day-forecast {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 10px 0px;
  }
</style>