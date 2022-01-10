import axios from "axios";

const API_KEY = "5d80ae1be212d9d25902cab8cee43b63";

async function getData(location) {
  try { 
    const respone = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=5d80ae1be212d9d25902cab8cee43b63`);
    console.log(respone.data);
  } catch (error) {
    console.log(error);
  }

}

getData("dallas");