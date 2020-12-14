import React from 'react'

const WeatherCard = ({city, country, description, temperature, minTemp, maxTemp, icon, error, degree}) => {
    const getTime = () => {
        let currentTime = new Date();
        let hours = currentTime.getHours();
        let minutes = currentTime.getMinutes();

        let timeSet = hours >= 12 ? 'PM' : 'AM';  
        hours = hours % 12;  
        hours = hours ? hours : 12;  
        minutes = minutes < 10 ? '0' + minutes : minutes; 

        return `${hours}:${minutes} ${timeSet}`
    }

    const fahrenheit = (temp) => Math.round(temp);
    const celsius = (temp) => Math.round((temp - 32) * 5/9);
    
    return (
        <div>
            <div className="weatherCard">
                {city && country && <div className="city">{city}, {country}</div>}
                {city && <div className="city"><br/><p className="time">Updated: {getTime()}  </p></div>}
                {icon && <div className="icon"><img className="icon" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather icon"/></div>}
                {temperature && <div className="temp">{degree === false ? fahrenheit(temperature) + "° " : celsius(temperature) + "°"} </div>}
                <div className="range">
                    {maxTemp && <span className="maxTemp">{degree === false ? fahrenheit(maxTemp) + "° / " : celsius(maxTemp) + "° / "}</span>} 
                    {minTemp && <span className="minTemp">{degree === false ? fahrenheit(minTemp) + "°" : celsius(minTemp) + "°"}</span>}
                </div>
                {description && <div className="desc">{description}</div>}
            </div>

            <div className="error">{error && <h2>{error}</h2>}</div>
        </div>
    )
}

export default WeatherCard
