import axios from "axios";

const API_KEY = "5d80ae1be212d9d25902cab8cee43b63";

async function getCoord(location) {
  try { 
    const response = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`);
    return { name: response.data.name, coordinates: response.data.coord };
  } catch (error) {
    console.log("getCoord error:" + error);
  }
}

async function getWeatherData(location, unit) {
  try { 
    const locationData = await getCoord(location);
    const response = await axios(`https://api.openweathermap.org/data/2.5/onecall?lat=${locationData.coordinates.lat}&lon=${locationData.coordinates.lon}&exclude=minutely&appid=${API_KEY}&units=${unit}`)
    console.log(locationData.name);
    console.log(response.data);
  } catch (error) {
    console.log("getWeatherData error" + error);
  }
}

export default getWeatherData;