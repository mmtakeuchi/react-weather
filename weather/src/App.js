import React, { useState } from 'react';
import './App.css';
import Search from './components/Search'
import WeatherCard from './components/WeatherCard'

function App() {
  const [weather, setWeather] = useState([]);

  const fetchWeather = (event) => {
    const city = event.target.elements.city.value
    event.preventDefault();
    const baseURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
    
    if (city) {

      fetch(baseURL)
        .then(response => {
          if (response.status == 200) {
            return response.json();
          } else {
            // throw Error(response.statusText);
            alert("Please enter a valid city");
            window.location.reload()
          }
        })
        .then(data => 
          setWeather({
            data: data,
            city: data.name,
            description: data.weather[0].description,
            temperature: Math.round(data.main.temp * 9/5 - 459.67),
            minTemp: Math.round(data.main.temp_min * 9/5 - 459.67),
            maxTemp: Math.round(data.main.temp_max * 9/5 - 459.67),
            icon: data.weather[0].icon,
            error: ""
          })
        )
    } else {
      setWeather({
        data: "",
        city: "",
        mainWeather: "",
        description: "",
        temperature: "",
        minTemp: "",
        maxTemp: "",
        icon: "",
        error: "Please Type a City"
      })
    }
  }

    return (
      <div className="App">
        <h2>Weather App</h2>

        <Search getWeather={fetchWeather} />
        
        <WeatherCard 
          city={weather.city}
          description={weather.description}
          temperature={weather.temperature}
          minTemp={weather.minTemp}
          maxTemp={weather.maxTemp}
          icon={weather.icon}
          error={weather.error}
        />
        {console.log(weather.data)}
      </div>
    );
}

export default App;
