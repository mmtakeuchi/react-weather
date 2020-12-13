import React from 'react'

const WeatherCard = ({city, description, temperature, minTemp, maxTemp, icon, error, degree}) => {

    const fahrenheit = (temp) => Math.round(temp);
    const celsius = (temp) => Math.round((temp - 32) * 5/9);
    
    return (
        <div className="weatherCard">
            <div className="city">{city && <h1 >{city}</h1>}</div>
            <div className="icon">{icon && <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather icon"/>}</div>
            <div className="temp">{temperature && <h2 >{degree === false ? fahrenheit(temperature) + "° " : celsius(temperature) + "°"} </h2>}</div>
            <div className="range">
                <h3 >
                    {maxTemp && <span className="maxTemp">{degree === false ? fahrenheit(maxTemp) + "° / " : celsius(maxTemp) + "° / "}</span>} 
                    {minTemp && <span className="minTemp">{degree === false ? fahrenheit(minTemp) + "°" : celsius(minTemp) + "°"}</span>}
                </h3>
            </div>
            <div className="desc">{description && <h2 >{description}</h2>}</div>
            {error && <h2>{error}</h2>}
        </div>
    )
}

export default WeatherCard
