import { createApp } from 'vue'
import WeatherApp from './WeatherApp.vue'

// (async () => {
//    console.log( await getWeatherData("new york", "imperial"));
// })();

createApp(WeatherApp).mount('#app')

// getWeatherData("new york", "imperial")
// .then(result => {
//   let testDiv = document.createElement('div');
//   testDiv.innerText = result.name;
//   document.body.appendChild(testDiv);
// })


