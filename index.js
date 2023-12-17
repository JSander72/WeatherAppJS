window.onload = function () {
  const apiKey = "44a0e5165b265ba57bfd8e1d4165b730b";
  const apiUrl = "http://api.openweathermap.org/data/2.5/weather?";

  const searchBox = document.querySelector('.search input');
  const searchBtn = document.querySelector('.search button');

  async function checkWeather(city) {
    const response = await fetch(apiUrl + 'appid=' + apiKey + '&units=imperial' + '&q=' + city);
    var data = await response.json();

    console.log(data);

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°F';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + ' mi/hr';
  }
// not able to get search img to update city with api to refresh app - solve 
  searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
  });
};
