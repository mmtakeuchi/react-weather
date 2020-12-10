import React from 'react'

const WeatherCard = ({city, description, temperature, minTemp, maxTemp, icon, error, degree}) => {
    const capitalize = (words) => {
        return words.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ")
    }

    const fahrenheit = (temp) => Math.round(temp);
    const celsius = (temp) => Math.round((temp - 32) * 5/9);
    
    return (
        <div>
            {city && <h3>{city}</h3>}
            {icon && <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather icon"/>}
            {description && <p>{capitalize(description)}</p>}
            {temperature && <p>{degree === false ? fahrenheit(temperature) + "°F" : celsius(temperature) + "°C"} </p>}
            <p>
                {maxTemp && <span>H:     {degree === false ? fahrenheit(maxTemp) + "°F" : celsius(maxTemp) + "°C"}</span>}
                {minTemp && <span>  L:{degree === false ? fahrenheit(minTemp) + "°F" : celsius(minTemp) + "°C"}</span>}
            </p>
            {error && <p>{error}</p>}
        </div>
    )
}

export default WeatherCard
