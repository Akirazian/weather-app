<template>
  <div class="container">
    <Header @search="getWeather"/>
    <Current :current="currentWeather" />
    <div class="hourly-container">
      <Hourly :hourlyWeather="hourlyWeather"/>
    </div>
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
      hourlyWeather: []
    }
  },
  methods: {
    async getWeather(city) {
      const data = await getWeatherData(city, "imperial");
      console.log(data);
      this.currentWeather = data.current;
    },
  },
  created() {
    this.getWeather("london");

    this.hourlyWeather = [
      {
        id: 1,
        time: "11pm",
        temp: "45",
        weather: "cloudy"
      },
      {
        id: 2,
        time: "12am",
        temp: "40",
        weather: "cloudy"
      },
      {
        id: 3,
        time: "1am",
        temp: "38",
        weather: "drizzle"
      },
      {
        id: 4,
        time: "2am",
        temp: "36",
        weather: "rain"
      },
    ]
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
  flex-direction: row;
}
</style>
