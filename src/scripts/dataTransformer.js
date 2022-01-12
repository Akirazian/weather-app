import fromUnixTime from 'date-fns/fromUnixTime'
import format from 'date-fns/format';

const transformDate = (() => {

  const currentDate = (unixDate) => {
    const date = fromUnixTime(unixDate);
    const transformedDate = format(date, "EEEE',' MMM do yyyy")
    return transformedDate;
  }
  
  const currentTime = (unixDate) => {
    const time = fromUnixTime(unixDate);
    const transformedTime = format(time, "p")
    return transformedTime
  }

  return {
    currentDate,
    currentTime
  }
})();

function transformData(name, data) {
   const cleanData = {
    name: name,
    current: {
      date: transformDate.currentDate(data.current.dt),
      time: transformDate.currentTime(data.current.dt),
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