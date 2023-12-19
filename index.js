window.onload = function () {
  const apiKey = "4a0e5165b265ba57bfd8e1d4165b730b";
  const apiUrl = "http://api.openweathermap.org/data/2.5/weather?";

  const searchBox = document.querySelector('.search input');
  const searchBtn = document.querySelector('.search button');
  const weatherIcon = document.querySelector('.weather-icon');

  async function checkWeather(city) {
    const response = await fetch(apiUrl + 'APPID=' + apiKey + '&units=imperial&q=' + city );
    const data = await response.json();

    console.log(data);

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



  }
// not able to get search img to update city with api to refresh app - solved - button "type" added to html
  searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
  });
};
