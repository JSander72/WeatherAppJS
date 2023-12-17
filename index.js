const apiKey = "44a0e5165b265ba57bfd8e1d4165b730b";
const apiUrl = "http://api.openweathermap.org/data/2.5/weather?units=imperial&q=birmingham";

async function checkWeather() {
  const response = await fetch(apiUrl + '&appid=${apiKey}');
  var data = await response.json();

  console.log(data);
}

checkWeather();
