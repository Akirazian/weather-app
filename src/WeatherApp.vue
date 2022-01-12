<template>
  <div class="container">
    <Header cityName="New York"/>
    <Hourly v-bind:hourlyWeather="hourlyWeather"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Hourly from './components/Hourly.vue'

export default {
  name: 'WeatherApp',
  components: {
    Header,
    Hourly,
  },
  data() {
    return {
      currentWeather: {},
      hourlyWeather: []
    }
  },
  created() {
    this.currentWeather = {
      name: "New York",
      current: {
        date: "Tues Jan 11th 2022",
        time: "9:45 PM",
        temp: "56",
        feels_like: "48",
        humidity: "20",
        wind_speed: "5",
        weather: {
          id: "300",
          main: "Cloudy",
          description: "Cloudy with a chance of meatballs",
          iconId: "01n"
        } //contains id, mainType, description, and iconId for url fetch
      },
    }
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
</style>
