import React, { useState } from 'react';
import './App.css';
import Search from './components/Search'
import WeatherCard from './components/WeatherCard'

function App() {
  const [weather, setWeather] = uesState([]);

  const fetchWeather = (event) => {
    event.preventDefault()
    const baseURL = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    
    fetch(baseURL)
      .then(response => response.json())
      .then(data =>  data)
      setWeather({
        data: apiData
      })
      .catch(errors => console.log(errors))
  }

    return (
      <div className="App">
        <Search getWeather={fetchWeather} />
        {console.log(weather.data)}
        <WeatherCard />
      </div>
    );
}

export default App;
