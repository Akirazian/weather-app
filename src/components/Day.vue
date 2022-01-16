<template>
  <div class="day-forecast">
    <div class="day-item">{{day.day}}</div>
    <div class="day-item">{{day.weather.main}}</div>
    <div class="day-item">{{day.rainChance}}%</div>
    <div class="day-item">{{day.humidity}}%</div>
    <div class="day-item">H: {{day.max}}°  L: {{day.min}}°</div>
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

<style>
  .day-forecast {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 10px 0px;
  }

  .day-item {
    flex: 1 1 0px;
  }

</style>