const getWeatherUpdate = async (position) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=4600dc4b5c6ab17cc6950256a2356739`;
    const res = await fetch(url);
    const data = await res.json();
    displayWeather(data);
}

const getCurrentLocation = () => {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(getWeatherUpdate);
    }else {
        alert ("Location feature not supported on your device")
    }
}

const displayWeather = (data) => {
    console.log(data);
    const currentTemp = `${parseFloat(data.main.temp - 273).toFixed(0)}°C`;
    const feelsLike = `${parseFloat(data.main.feels_like - 273).toFixed(0)}°C`;
    const tempMin = `${parseFloat(data.main.temp_min - 273).toFixed(0)}°C`;
    const tempMax = `${parseFloat(data.main.temp_max - 273).toFixed(0)}°C`;
    const location = `${(data.name)}`;
    const country = `${(data.sys.country)}`;
    const sunrise = `${new Date(data.sys.sunrise).toTimeString()}`;
    const sunset = `${new Date(data.sys.sunset).toTimeString()}`;

    const weatherDisplay = document.getElementById("weather-display");
    const p = document.createElement("p");
    p.innerHTML = `
    ${currentTemp} <br>
     ${feelsLike} <br>
     ${tempMin} <br>
      ${tempMax} <br>
      ${location} <br>
      ${country} <br>
      ${sunrise} <br>
      ${sunset}`
    weatherDisplay.appendChild(p)

    console.log(currentTemp, feelsLike, tempMin, tempMax, location, country, sunrise, sunset)
}

getCurrentLocation();