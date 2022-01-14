import fromUnixTime from 'date-fns/fromUnixTime'
import formatInTimeZone from 'date-fns-tz/formatInTimeZone';

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

  return {
    currentDate,
    currentTime,
    hourTime
  }
})();

function transformHourlyData(data, timezone) {
  const reducedData = data.slice(0, 24); //We only want 24 hours of hourly forecast 
  reducedData.forEach((hour, index) => {
    const transformedHour = {
      time: transformDate.hourTime(hour.dt, timezone),
      temp: Math.round(hour.temp),
      weather: hour.weather[0].main
    }
    reducedData[index] = transformedHour;
  });
  return reducedData
}

function transformData(name, data) {
   const cleanData = {
    current: {
      name: name,
      date: transformDate.currentDate(data.current.dt, data.timezone),
      time: transformDate.currentTime(data.current.dt, data.timezone),
      temp: Math.round(data.current.temp),
      feels_like: Math.round(data.current.feels_like),
      humidity: data.current.humidity,
      wind_speed: data.current.wind_speed,
      weather: data.current.weather[0] //contains id, mainType, description, and iconId for url fetch
    }, 
    hourly: transformHourlyData(data.hourly, data.timezone),
  }
  return cleanData;
}


 
export default transformData;