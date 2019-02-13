const getWeather = () => {
  // getting the search term from the HTML
  const searchTerm = document.querySelector('.search-term').value
  console.log(searchTerm)
  // const url =
  //   'https://api.openweathermap.org/data/2.5/weather?q=' +
  //   searchTerm +
  //   '&appid=5c418bd61b262dfeab5ee02852a70c07&units=imperial'
  // building url dynamically based on the search term
  // make GET request to weather API
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=5c418bd61b262dfeab5ee02852a70c07&units=imperial`
  )
  // parse results
  // add current weather to HTML
}

document.querySelector('.search').addEventListener('click', getWeather)
