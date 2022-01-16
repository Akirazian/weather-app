<template>
  <div class="day-forecast">
    <div class="day-item">{{day.day}}</div>
    <div class="day-item">
      <img :src="`${publicPath}${day.weather}`" alt="">
    </div>
    <div class="hide-mobile day-item">{{day.rainChance}}%</div>
    <div class="hide-mobile day-item">{{day.humidity}}%</div>
    <div class="day-item">H: {{day.max}}°  L: {{day.min}}°</div>
  </div>
</template>

<script>
export default {
  name: 'Day',
  props: {
    day: Object,
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
  .day-forecast {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 10px 0px;
  }

  .day-item {
    flex: 1 1 0px;
  }

  img {
    width: 50px;
    height: 50px;
  }

</style>