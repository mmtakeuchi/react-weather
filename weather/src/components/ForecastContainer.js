import React from 'react'
import ForecastCard from './ForecastCard'

const ForecastContainer = ({forecast}) => {
    if (forecast.length > 0) {
        const week = forecast.map((data,i) => <ForecastCard key={i} data={data} />)
    
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
