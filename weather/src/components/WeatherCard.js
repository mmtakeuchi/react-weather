import React from 'react'

const WeatherCard = ({city, description, temperature, minTemp, maxTemp, icon, error}) => {
    const capitalize = (words) => {
        return words.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ")
    }

    return (
        <div>
            {city && <h3>{city}</h3>}
            {icon && <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather icon"/>}
            {description && <p>{capitalize(description)}</p>}
            {temperature && <p>{temperature} °F</p>}
            <p>
                {maxTemp && <span>H:{maxTemp}°F     </span>}
                {minTemp && <span>  L:{minTemp}°F</span>}
            </p>
            {error && <p>{error}</p>}
        </div>
    )
}

export default WeatherCard
