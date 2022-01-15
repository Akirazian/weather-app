<template>
  <div class="container">
    <Header @search="getWeather" @toggleUnit="toggleUnit"/>
    <Current :current="currentWeather" :unit="unit" />
    <hr>
    <h3>Hourly Forecast</h3>
    <div class="hourly-container">
      <div class="hourly-forecast" :key="hour.id" v-for="hour in hourlyWeather">
        <Hour :hour="hour" :unit="unit" />
      </div>
    </div>
    <hr>
    <div class="daily-container">
      <div class="daily-forecast" :key="day.id" v-for="day in dailyWeather">
        <Day :day="day" :unit="unit" />
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Current from './components/Current.vue'
import Hour from './components/Hour.vue'
import Day from './components/Day.vue'
import getWeatherData from './scripts/apiHandler.js'

export default {
  name: 'WeatherApp',
  components: {
    Header,
    Hour,
    Current,
    Day
  },
  data() {
    return {
      currentWeather: {},
      hourlyWeather: [],
      dailyWeather: [],
      unit: "F",
      currentCity: ""
    }
  },
  methods: {
    async getWeather(city) { //Trigged by search bar, pulls and updates weather data for searched city with currently selected unit.
      this.currentCity = city;
      let fetchUnit;
      this.unit === "F" ? fetchUnit = "imperial" : fetchUnit = "metric";
      this.fetchData(city, fetchUnit);
    },

    async fetchData(city, unit) { //Pulls and updates data
      const data = await getWeatherData(city, unit);
      console.log(data);
      this.currentWeather = data.current;
      this.hourlyWeather = data.hourly;
      this.dailyWeather = data.daily
    },

    async toggleUnit() { //Toggles F/C unit by first pulling data of the current city with opposite unit and then updating the unit value
      let fetchUnit;
      this.unit === "F" ? fetchUnit = "metric" : fetchUnit = "imperial"; //tells fetchData to pull the opposite of the current unit
      await this.fetchData(this.currentCity, fetchUnit) //this fetch must occur first to prevent delay with DOM update (unit display would update first before the data values!)
      this.unit === "F" ? this.unit = "C" : this.unit = "F";
    }

  },
  created() {
    this.getWeather("New York");
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

.daily-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
}
</style>
