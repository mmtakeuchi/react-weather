import React from 'react'

const ForecastCard = ({data, degree}) => {

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const d = new Date(data.dt * 1000);
    const dayName = days[d.getDay()];

    const fahrenheit = (temp) => Math.round(temp);
    const celsius = (temp) => Math.round((temp - 32) * 5/9);

    return (
        <div className="forecast-card">
            <h3>{dayName}</h3>
            <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="weather icon"/>
            <div>
                <p className="card-text">{data.weather[0].description}</p>
                <p>
                    <span className="maxTemp">H: {degree === false ? fahrenheit(data.main.temp_max.toFixed(0)) + "° " : celsius(data.main.temp_max.toFixed(0)) + "°    "}</span>
                    <span>L: {degree === false ? fahrenheit(data.main.temp_min.toFixed(0)) + "°" : celsius(data.main.temp_min.toFixed(0)) + "°"}</span> 
                </p>
            </div>
        </div>
    )
}

export default ForecastCard