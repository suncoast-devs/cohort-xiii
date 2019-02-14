class WeatherAPI {
  constructor() {
    this.appid = '59c6f243bf44bdca855e2e8f1c663981'
    this.baseUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${
      this.appid
    }&units=imperial`
  }

  getWeather(url) {
    let currentWeather = {}
    fetch(url)
      // getting the response back
      .then(resp => {
        if (resp.status === 200) {
          return resp.json()
        } else {
          document.querySelector('.weather-city-label').textContent =
            'No city found, try again'
        }
      })
      // opening the response, joke is the actual data that we want
      .then(weather => {
        console.log(weather)
        currentWeather = weather
        document.querySelector('.weather-city-label').textContent =
          'The Weather in ' +
          currentWeather.name +
          ' is ' +
          currentWeather.weather[0].main
        console.log(currentWeather.weather[0].main)
      })
  }

  getWeatherByZip(zip) {
    //   url = '?appid=&zip=' + cityValue + ',us' + '&'
    // attach the query to the url
    let url = this.baseUrl + '&zip=' + zip
    // call getWeather
    this.getWeather(url)
  }

  getWeatherByCity(city) {
    let url = this.baseUrl + '&q=' + city
    this.getWeather(url)
  }

  getWeatherByLatLon(lat, lon) {
    let url = `${this.baseUrl}&lat=${lat}&lon=${lon}`
    this.getWeather(url)
  }
}

const isNumber = str => {
  return !isNaN(parseFloat(str)) && !isNaN(str - 0)
}

const getWeather = () => {
  const weatherAPI = new WeatherAPI()
  let cityValue = document.querySelector('.weather-search-text').value
  if (cityValue.length === 0) {
    document.querySelector('.weather-city-label').textContent =
      'The textbox is empty.'
  } else {
    console.log(isNumber(cityValue))
    localStorage.setItem('last-searched-location', cityValue)
    if (isNumber(cityValue)) {
      weatherAPI.getWeatherByZip(cityValue)
    } else {
      weatherAPI.getWeatherByCity(cityValue)
    }
  }
}

const clearText = () => {
  document.querySelector('.weather-search-text').value = ''
  document.querySelector('.weather-city-label').textContent = ''
}

const locationFoundCallback = position => {
  console.log(position)
  new WeatherAPI().getWeatherByLatLon(
    position.coords.latitude,
    position.coords.longitude
  )
}

const loadLastLocation = () => {
  const lastLocation = localStorage.getItem('last-searched-location')
  const weatherAPI = new WeatherAPI()
  if (isNumber(lastLocation)) {
    weatherAPI.getWeatherByZip(lastLocation)
  } else {
    weatherAPI.getWeatherByCity(lastLocation)
  }
  // get user location
  navigator.geolocation.getCurrentPosition(locationFoundCallback, () => {
    alert('no location found, whomp')
  })
}

document.querySelector('.search-button').addEventListener('click', getWeather)
document.querySelector('.clear-button').addEventListener('click', clearText)
document.addEventListener('DOMContentLoaded', loadLastLocation)
