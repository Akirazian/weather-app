function selectIcon(weather) {
  let weatherIcon;

  switch (weather) {
    case "Thunderstorm":
      weatherIcon = "storm.png";
      break;

    case "Drizzle":
      weatherIcon = "rain.png";
      break;
    
    case "Rain":
      weatherIcon = "rain.png";
      break;
      
    case "Clouds":
      weatherIcon = "cloudy.png";
      break;
    
    case "Snow":
      weatherIcon = "snow.png";
      break;
    
    case "Clear":
      weatherIcon = "sun.png";
      break;

    default: //Catch for all other Main weather types (mist, smoke, haze, etc)
      weatherIcon = "fog.png"
      break;
  }

  const iconSrc = `icons/${weatherIcon}`
  return iconSrc;
}

export default selectIcon;