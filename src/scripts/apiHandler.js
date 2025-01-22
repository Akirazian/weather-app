import axios from 'axios'
import transformData from "./dataTransformer";

//Enter your OpenWeather API key here
const API_KEY = "YOUR_KEY";

// First get the coordinates and city name from OpenWeather's 'current weather' API
async function getCoord(location) { 
  try { 
    const response = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`);
    return { name: response.data.name, coordinates: response.data.coord };
  } catch (error) {
    console.log("getCoord error:" + error);
  }
}

// Then pass the coordinates into their "One Call" API to pull current, hourly and weekly data
async function getWeatherData(location, unit) {
  try { 
    const locationData = await getCoord(location);
    const response = await axios(`https://api.openweathermap.org/data/2.5/onecall?lat=${locationData.coordinates.lat}&lon=${locationData.coordinates.lon}&exclude=minutely&appid=${API_KEY}&units=${unit}`)
    return transformData(locationData.name, response.data); 
  } catch (error) {
    console.log("getWeatherData error" + error);
  }
}

export default getWeatherData;
