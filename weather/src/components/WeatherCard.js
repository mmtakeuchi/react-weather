import React from 'react'

const WeatherCard = ({description, city, temperature, error}) => {
    return (
        <div>
            {city && <p>{city}</p>}
            {temperature && <p>{temperature}</p>}
            {description && <p>{description}</p>}
            {error && <p>{error}</p>}
        </div>
    )
}

export default WeatherCard
