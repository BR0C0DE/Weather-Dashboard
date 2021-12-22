var today = new Date();

var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();


document.getElementById('search').addEventListener('click', event => {
  event.preventDefault()
  const cityName = document.getElementById('searchCity').value
  axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=27862786e3e0baeeeb89c014e5d01fdf
    `)
    .then(res => {
      const weather = res.data
      // Icon Generation
      let icon = weather.weather[0].icon
      
      
      
      
      
      document.getElementById('weatherIcon').innerHTML = `
        <img src="http://openweathermap.org/img/wn/${icon}@2x.png"></img>`
      
      document.getElementById('iconStatus').innerHTML = `
        <h5 class="big">${weather.weather[0].description}</h5>
      `
      document.getElementById('city').innerHTML = `
        <h1>${weather.name}</h1>
      `
      document.getElementById('temp').innerHTML = `
        <h2>Tempurature: ${weather.main.temp}°F</h2>
      `
      document.getElementById('humidity').innerHTML = `
        <h2>Humidity: ${weather.main.humidity}%<div>
      `
      document.getElementById('wind').innerHTML = `
        <h2>Wind Speed: ${weather.wind.speed}mp/h<div>
      `
      // if (weather.weather[0].) {
        
      // }
      console.log(icon)
      console.log(weather)
      // axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly,daily&appid=appid=27862786e3e0baeeeb89c014e5d01fdf
      // `)

    })
  document.getElementById('search').addEventListener('click', event => {
    event.preventDefault()
  // Latitude and Longitude for UV
  let lat = weather.coord.lat
  let long = weather.coord.long
    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long})`
      .then(res => {
        const weather = res.data
      document.getElementById('UV').innerHTML = `
        <h2>${weather}<div>
      `
      })
})

