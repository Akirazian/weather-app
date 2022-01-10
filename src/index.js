import getWeatherData from './apiHandler.js';

const locationInput = document.getElementById("location-input");
const getWeather = () => getWeatherData(locationInput.value, "imperial");



const searchButton = document.getElementById("search-button");
searchButton.addEventListener('click', getWeather);

document.addEventListener('keydown', (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    getWeather();
  }
})