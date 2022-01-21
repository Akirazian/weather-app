import fromUnixTime from 'date-fns/fromUnixTime'
import formatInTimeZone from 'date-fns-tz/formatInTimeZone';
import selectIcon from './iconSelector';

const transformDate = (() => { //Module for formating Unix time

  const currentDate = (unixDate, timezone) => {
    const date = fromUnixTime(unixDate);
    const transformedDate = formatInTimeZone(date, timezone, "EEEE',' MMM do yyyy")
    return transformedDate;
  }
  
  const currentTime = (unixDate, timezone) => {
    const time = fromUnixTime(unixDate);
    const transformedTime = formatInTimeZone(time, timezone, "p")
    return transformedTime
  }

  const hourTime = (unixDate, timezone) => {
    const time = fromUnixTime(unixDate);
    const transformedTime = formatInTimeZone(time, timezone, "h aaa")
    return transformedTime
  }

  const dailyTime = (unixDate, timezone) => {
    const day = fromUnixTime(unixDate);
    const transformedDay = formatInTimeZone(day, timezone, "EEEE")
    return transformedDay;
  }

  return {
    currentDate,
    currentTime,
    hourTime,
    dailyTime
  }
})();

function transformHourlyData(data, timezone) {
  const reducedData = data.slice(0, 24); //We only want 24 hours of hourly forecast 
  reducedData.forEach((hour, index) => {
    const time = hour.weather[0].icon.slice(-1) === "d" ? "day" : "night";
    const transformedHour = {
      time: transformDate.hourTime(hour.dt, timezone),
      temp: Math.round(hour.temp),
      weather: selectIcon(hour.weather[0].main, time)
    }
    reducedData[index] = transformedHour;
  });
  return reducedData
}

function transformDailyData(data, timezone) {
  data.forEach((day, index) => {
    const transformedDay = {
      day: transformDate.dailyTime(day.dt, timezone),
      max: Math.round(day.temp.max),
      min: Math.round(day.temp.min),
      rainChance: Math.round((day.pop * 100)),
      humidity: day.humidity,
      weather: selectIcon(day.weather[0].main)
    }
    data[index] = transformedDay;
  });
  return data;
}

function transformData(name, data) {
  const time = data.current.weather[0].icon.slice(-1) === "d" ? "day" : "night"; 

  const cleanData = {
    current: {
      name: name,
      date: transformDate.currentDate(data.current.dt, data.timezone),
      time: transformDate.currentTime(data.current.dt, data.timezone),
      temp: Math.round(data.current.temp),
      feels_like: Math.round(data.current.feels_like),
      humidity: data.current.humidity,
      wind_speed: data.current.wind_speed,
      weatherIcon: selectIcon(data.current.weather[0].main, time),
      weather_description: data.current.weather[0].description
    }, 
    hourly: transformHourlyData(data.hourly, data.timezone),
    daily: transformDailyData(data.daily, data.timezone)
  }
  return cleanData;
}

export default transformData;