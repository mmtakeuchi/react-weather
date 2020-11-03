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
        .then(response => response.json())
        .then(data => 
          setWeather({
            data: data,
            city: data.name,
            mainWeather: data.weather[0].main,
            description: data.weather[0].description,
            temperature: data.main.temp,
            error: ""
          })
        )
        .catch(errors => console.log(errors))
    } else {
      setWeather({
        data: "",
        city: "",
        mainWeather: "",
        description: "",
        temperature: "",
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
          mainWeather={weather.mainWeather}
          description={weather.description}
          temperature={weather.temperature}
          error={weather.error}
        />
        {console.log(weather.data)}
      </div>
    );
}

export default App;
