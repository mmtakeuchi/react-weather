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
          data: results[0],
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
          data: "",
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


    return (
      <div className="App">
        <h2>Weather App</h2>

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
        
      </div>
    );
}

export default App;
