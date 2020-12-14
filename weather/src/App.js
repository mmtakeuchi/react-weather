import React, { useState } from 'react';
import './App.css';
import Search from './components/Search'
import WeatherCard from './components/WeatherCard'
import ForecastContainer from './components/ForecastContainer'
import DegreeButton from './components/DegreeButton'

function App() {
  const [weather, setWeather] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [degree, setDegree] = useState(false);

  const fetchWeather = (event) => {
    let city = event.target.elements.city.value
    event.preventDefault();
    const oneDayURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
    const fiveDayURL = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    
    if (city) {
      Promise.all([
        fetch(oneDayURL),
        fetch(fiveDayURL)
      ])
      .then(async([aa, bb]) => {
        const a = await aa.json();
        const b = await bb.json();
        return [a, b]
      })
      .then(results => {
        const forecastData = results[1].list.filter(weather => weather.dt_txt.includes("21:00"))

        setWeather({
          weather: results[0], 
          error: ""
        })

        setForecast(forecastData)
      })
      .catch(errors => {

        setWeather({
          weather: "",
          error: "Sorry no city found. Please enter another city."
        });

        setForecast("")
      })
    } else {
      window.location.reload()
    }
    event.target.elements[0].value = "";
  }

    return (
      <div className="app">
        <DegreeButton 
          isOn={degree}
          handleToggle={() => setDegree(!degree)}
        />
        <h1 className="title">Weather App</h1>

        <Search getWeather={fetchWeather} />

        <WeatherCard 
          weather={weather}
          error={weather.error}
          degree={degree}
        />

        <ForecastContainer forecast={forecast} degree={degree}/>
        
      </div>
    );
}

export default App;
