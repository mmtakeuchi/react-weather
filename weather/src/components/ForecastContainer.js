import React from 'react'
import ForecastCard from './ForecastCard'

const ForecastContainer = ({forecast}) => {
    if (forecast) {
        const week = forecast.map((data,i) => <ForecastCard key={i} data={data} />)
        // const week = props.map(data => data.name)
    
        return (
            <div className="card-container">
                {week}
            </div>
        ) 
    }

    return (
        <div>
            Week Container
        </div>
    )
}

export default ForecastContainer
