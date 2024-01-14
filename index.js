const { requireOrImport } = require("mocha/lib/nodejs/esm-utils");

window.onload = function () {
  require("dotenv").config();

  const apiKey = process.env.WEATHER_API_KEY;
  const apiUrl = process.env.WEATHER_API_URL;

  const searchBox = document.querySelector('.search input');
  const searchBtn = document.querySelector('.search button');
  const weatherIcon = document.querySelector('.weather-icon');

  async function checkWeather(city) {
    const response = await fetch(apiUrl + 'APPID=' + apiKey + '&units=imperial&q=' + city );

    if(response.status == 404){
      document.querySelector('.error').style.display = 'block';
      document.querySelector('.weather').style.display = 'none';
    }else{
      var data = await response.json();


    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°F';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + ' mi/hr';

    if (data.weather[0].main=='Clouds'){
      weatherIcon.src = 'images/clouds.png';
    }
    else if(data.weather[0].main=='Clear'){
      weatherIcon.src = 'images/clear.png';
    }
    else if(data.weather[0].main=='Rain'){
      weatherIcon.src = 'images/rain.png';
    }
    else if(data.weather[0].main=='Drizzle'){
      weatherIcon.src = 'images/drizzle.png';
    }
    else if(data.weather[0].main=='Mist'){
      weatherIcon.src = 'images/mist.png';
    }
    else if(data.weather[0].main=='Snow'){
      weatherIcon.src = 'images/snow.png';
    }

    document.querySelector('.weather').style.display = 'block';
    document.querySelector('.error').style.display = 'none';

    }



 }

  searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
  });
};
