import React from 'react'

const WeatherCard = ({city, description, temperature, mainWeather, minTemp, maxTemp, error}) => {
    const capitalize = (words) => {
        return words.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ")
    }

    return (
        <div>
            {city && <p>{city}</p>}
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
