<template>
  <div class="hourly-forecast" :key="hour.id" v-for="hour in hourlyWeather">
    <Hour :hour="hour" />
  </div>
</template>

<script>
  import Hour from './Hour.vue'

  export default {
    name: "Hourly",
    props: {
      hourlyWeather: Array,
    },
    components: {
      Hour,
    }
  }
</script>