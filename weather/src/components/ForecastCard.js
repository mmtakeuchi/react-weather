import React from 'react'

const ForecastCard = ({data}) => {
    console.log(data)

    return (
        <div>
            <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="weather icon"/>
            <p className="card-text">{data.weather[0].description}</p>
            <p>{data.main.temp.toFixed(0)} °F</p>
        </div>
    )
}

export default ForecastCard

// {icon && <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather icon"/>}


// data: results[0],
//           city: results[0].name,
//           description: results[0].weather[0].description,
//           temperature: results[0].main.temp.toFixed(0), 
//           minTemp: results[0].main.temp_min.toFixed(0), 
//           maxTemp: results[0].main.temp_max.toFixed(0), 
//           icon: results[0].weather[0].icon,
//           error: ""