import fromUnixTime from 'date-fns/fromUnixTime'
import formatInTimeZone from 'date-fns-tz/formatInTimeZone';

const transformDate = (() => {

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

  return {
    currentDate,
    currentTime
  }
})();

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
    hourly: data.hourly //(Saving this and weekly once I implement Vue!)
  }
  return cleanData;
}


 
export default transformData;