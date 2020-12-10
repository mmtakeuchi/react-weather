import React from 'react'

const ForecastCard = ({data}) => {
    console.log(data)

    const capitalize = (words) => {
        return words.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ")
    }

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const d = new Date(data.dt * 1000);
    const dayName = days[d.getDay()];

    return (
        <div className="forecast-card">
            <h3>{dayName}</h3>
            <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="weather icon"/>
            <div>
                <p className="card-text">{capitalize(data.weather[0].description)}</p>
                <p>
                    <span>H: {data.main.temp_max.toFixed(0)}°F</span>
                    <span>L: {data.main.temp_min.toFixed(0)}°F</span> 
                </p>
            </div>
        </div>
    )
}

export default ForecastCard