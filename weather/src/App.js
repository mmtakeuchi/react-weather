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
          main: results[0].weather[0].main,
          city: results[0].name,
          description: results[0].weather[0].description,
          temperature: results[0].main.temp.toFixed(0), 
          minTemp: results[0].main.temp_min.toFixed(0), 
          maxTemp: results[0].main.temp_max.toFixed(0), 
          icon: results[0].weather[0].icon,
          error: ""
        });

        setForecast(forecastData)
      })
      .catch(errors => {

        setWeather({
          main: "",
          city: "",
          description: "",
          temperature: "", 
          minTemp: "", 
          maxTemp: "", 
          icon: "",
          error: "Sorry no city found. Please enter another city."
        });

        setForecast("")
      })
    } else {
      window.location.reload()
    }
    event.target.elements[0].value = "";
  }

  const weatherClass = (mainWeather) => {
    return (mainWeather) ? mainWeather.toLowerCase() : ""
  }


    return (
      <div className={`app ${weatherClass(weather.main)}`}>
        <h1 className="title">Weather App</h1>

        <Search getWeather={fetchWeather} />
        
        <DegreeButton 
          isOn={degree}
          handleToggle={() => setDegree(!degree)}
        />

        <WeatherCard 
          city={weather.city}
          description={weather.description}
          temperature={weather.temperature}
          minTemp={weather.minTemp}
          maxTemp={weather.maxTemp}
          icon={weather.icon}
          error={weather.error}
          degree={degree}
        />

        <ForecastContainer forecast={forecast} degree={degree}/>
        {console.log({weather})}
      </div>
    );
}

export default App;
