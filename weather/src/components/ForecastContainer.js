import React from 'react'
import ForecastCard from './ForecastCard'

const ForecastContainer = ({forecast, degree}) => {
    if (forecast.length > 0) {
        const week = forecast.map((data,i) => <ForecastCard key={i} data={data} degree={degree}/>)
    
        return (
            <div className="card-container">
                {week}
            </div>
        ) 
    }

    return (
        <div>
            
        </div>
    )
}

export default ForecastContainer
