<template>
  <div class="container">
    <Header @search="getWeather" @toggleUnit="toggleUnit"/>
    <div class="current-hourly-container">
      <div class="current-container">
        <Current :current="currentWeather" :unit="unit" />
      </div>
      <div class="hourly-container">
        <div class="hourly-forecast" :key="hour.id" v-for="hour in hourlyWeather">
          <Hour :hour="hour" :unit="unit" />
        </div>
      </div>
    </div>
    <div class="daily-container">
      <div class="day-header">
        <div class="day-item">Day</div>
        <div class="day-item">Weather</div>
        <div class="hide-mobile day-item">Chance of Rain</div>
        <div class="hide-mobile day-item">Humidity</div>
        <div class="day-item">Temperature</div>
      </div>
      <div class="daily-forecast" :key="day.id" v-for="day in dailyWeather">
        <Day :day="day" :unit="unit" />
      </div>
    </div>
    <footer>
      <div class="footer-text"> Icons by <a href="https://icons8.com/">Icons8</a></div>
    </footer>
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
        try {
          this.currentCity = city;
          let fetchUnit;
          this.unit === "F" ? fetchUnit = "imperial" : fetchUnit = "metric";
          this.fetchData(city, fetchUnit);
        } catch (error) {
          console.log(error);
        }
      },

      async fetchData(city, unit) { //Pulls and updates data
        try {
          const data = await getWeatherData(city, unit);
          console.log(data);
          this.currentWeather = data.current;
          this.hourlyWeather = data.hourly;
          this.dailyWeather = data.daily
        } catch (error) {
          console.log(error);
        }    
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
  font-family: 'Montserrat', sans-serif;
}

.current-hourly-container {
  display: flex;
  align-items: center;
}

@media only screen and (max-width: 768px) {
    .current-hourly-container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  .hide-mobile {
    display: none;
  }
}

.current-container {
  margin: 40px;
  width: 1200px;
}

.hourly-container {
  display: flex;
  overflow-x: scroll;
  flex-direction: row;
}

.daily-container {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
}

.day-header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 10px 0px;
  border-bottom: gray 1px solid;
  padding-bottom: 10px;
}

.day-item {
  flex: 1 1 0px;
}

footer {
  text-align: center;
}

</style>
