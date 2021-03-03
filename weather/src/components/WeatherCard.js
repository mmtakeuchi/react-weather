import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faBolt,
  faCloudRain,
  faCloudShowersHeavy,
  faSnowflake,
  faSun,
  faSmog,
} from "@fortawesome/free-solid-svg-icons";

const WeatherCard = ({ weather, degree }) => {
  const current = weather.weather;

  const time = (dt) => {
    let options = { hour: "2-digit", minute: "2-digit" };
    return new Date(dt * 1000).toLocaleTimeString("en-US", options);
  };

  const fahrenheit = (temp) => Math.round(temp);
  const celsius = (temp) => Math.round(((temp - 32) * 5) / 9);

  const forecastIcon = (icon) => {
    if (icon === "Thunderstorm") {
      return <FontAwesomeIcon icon={faBolt} />;
    } else if (icon === "Drizzle") {
      return <FontAwesomeIcon icon={faCloudRain} />;
    } else if (icon === "Rain") {
      return <FontAwesomeIcon icon={faCloudShowersHeavy} />;
    } else if (icon === "Snow") {
      return <FontAwesomeIcon icon={faSnowflake} />;
    } else if (icon === "Clear") {
      return <FontAwesomeIcon icon={faSun} />;
    } else if (icon === "Clouds") {
      return <FontAwesomeIcon icon={faCloud} />;
    } else {
      return <FontAwesomeIcon icon={faSmog} />;
    }
  };

  if (current) {
    return (
      <div className="currentWeather">
        <div className="heading">
          {
            <div className="city">
              {current.name}, {current.sys.country}
            </div>
          }
          {<div className="time">Updated: {time(current.dt)}</div>}
        </div>

        <div className="weatherCard">
          <div className="column">
            <div className="mainContent">
              {
                <div className="temp">
                  {degree === false
                    ? fahrenheit(current.main.temp.toFixed(0)) + "°"
                    : celsius(current.main.temp.toFixed(0)) + "°"}
                </div>
              }

              <div className="iconDesc">
                <div className="icon">
                  {forecastIcon(current.weather[0].main)}
                </div>
                {<div className="desc">{current.weather[0].description}</div>}
              </div>
            </div>
          </div>

          <div className="column">
            <div className="details">
              {
                <div className="maxTemp">
                  <h4>High</h4>
                  <span>
                    {degree === false
                      ? fahrenheit(current.main.temp_max.toFixed(0)) + "°"
                      : celsius(current.main.temp_max.toFixed(0)) + "°"}
                  </span>
                </div>
              }
              {
                <div className="minTemp">
                  <h4>Low</h4>
                  <span>
                    {degree === false
                      ? fahrenheit(current.main.temp_min.toFixed(0)) + "°"
                      : celsius(current.main.temp_min.toFixed(0)) + "°"}
                  </span>
                </div>
              }
              {
                <div className="sunrise">
                  <h4>Sunrise</h4> <span>{time(current.sys.sunrise)}</span>
                </div>
              }
              {
                <div className="sunset">
                  <h4>Sunset</h4> <span>{time(current.sys.sunset)}</span>
                </div>
              }
              {
                <div className="wind">
                  <h4>Wind</h4> <span>{current.wind.speed} mph</span>
                </div>
              }
              {
                <div className="humid">
                  <h4>Humidity</h4> <span>{current.main.humidity}%</span>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>{weather.error && <div className="error">{weather.error}</div>}</div>
  );
};

export default WeatherCard;
