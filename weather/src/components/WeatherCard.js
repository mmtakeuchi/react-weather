import React from 'react'

// const WeatherCard = ({city, country, description, temperature, minTemp, maxTemp, icon, error, degree}) => {
const WeatherCard = ({weather, degree}) => {
    const current = weather.weather;
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
    
    if (current) {
        return (
            <div className="weatherCard">
                {console.log(current)}
                <div className="heading">
                    {<div className="city">{current.name}, {current.sys.country}</div>}
                    {<div className="time">Updated: {getTime()}</div>}
                </div>
                <div className="details">
                    <div className="tempDesc">
                        {<div className="temp">{degree === false ? fahrenheit(current.main.temp.toFixed(0)) + "° " : celsius(current.main.temp.toFixed(0)) + "°"} </div>}
                        {<div className="desc">{current.weather[0].description}</div>}
                    </div>
                    <div className="iconRange">
                        {<div className="icon"><img className="currentImg" src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`} alt="weather icon"/></div>}
                        <div className="range">
                            {<span className="maxTemp">{degree === false ? fahrenheit(current.main.temp_max.toFixed(0)) + "° / " : celsius(current.main.temp_max.toFixed(0)) + "° / "}</span>} 
                            {<span className="minTemp">{degree === false ? fahrenheit(current.main.temp_min.toFixed(0)) + "°" : celsius(current.main.temp_min.toFixed(0)) + "°"}</span>}
                        </div>
                    </div>
                </div>

                <div className="error">{weather.error && <h2>{weather.error}</h2>}</div>
            </div>
        )
    }

    return (
        <div>

        </div>
    )
}

export default WeatherCard
