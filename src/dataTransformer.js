import fromUnixTime from 'date-fns/fromUnixTime'
import format from 'date-fns/format';

function transformDate(unixDate) {
  const date = fromUnixTime(unixDate);
  const transformedDate = format(date, "EEEE MMM do yyyy")
  return transformedDate;
}

function transformData(name, data) {
   const cleanData = {
    name: name,
    current: {
      date: transformDate(data.current.dt),
      temp: Math.round(data.current.temp),
      feels_like: Math.round(data.current.feels_like),
      humidity: data.current.humidity,
      wind_speed: data.current.wind_speed,
      weather: data.current.weather[0]
    }, 
    hourly: data.hourly
  }
  console.log(cleanData);
}


 
export default transformData;