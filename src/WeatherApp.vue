<template>
  <div class="container">
    <Header @search="getWeather"/>
    <Current :current="currentWeather" />
    <hr>
    <h3>Hourly Forecast</h3>
    <div class="hourly-container">
      <Hourly :unit="unit" :hourlyWeather="hourlyWeather"/>
    </div>
    <hr>
    
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Current from './components/Current.vue'
import Hourly from './components/Hourly.vue'
import getWeatherData from './scripts/apiHandler.js'

export default {
  name: 'WeatherApp',
  components: {
    Header,
    Hourly,
    Current,
  },
  data() {
    return {
      currentWeather: {},
      hourlyWeather: [],
      unit: "F"
    }
  },
  methods: {
    async getWeather(city) {
      const data = await getWeatherData(city, "imperial");
      console.log(data);
      this.currentWeather = data.current;
      this.hourlyWeather = data.hourly;
    },
  },
  created() {
    this.getWeather("london");
  } 
}
</script>

<style>
.container {
  text-align: center;
  flex-direction: column;
}

.hourly-container {
  display: flex;
  overflow-x: scroll;
  flex-direction: row;
}
</style>
