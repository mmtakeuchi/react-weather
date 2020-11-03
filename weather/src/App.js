import React from 'react';
import './App.css';
import Search from './components/Search'
import WeatherCard from './components/WeatherCard'

class App extends React.Component {
    state = {
      location: "",
      weatherData: null
    }

  getWeatherData(location) {
    const baseURL = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    
    fetch(baseURL)
      .then(response => response.json())
      .then(data =>  { console.log(data)
      })
      .catch(errors => console.log(errors))
  }

  render () {
    return (
      <div className="App">
        <Search getWeather={this.getWeatherData} />
        <WeatherCard />
      </div>
    );
  }
}

export default App;
