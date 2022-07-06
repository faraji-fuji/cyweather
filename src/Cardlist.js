import React from "react";
import Card from "./Card";

const Cardlist = (props) => {
    return (
      <div style={{overflow: 'auto', height: '45vh'}}>
        {props.weatherData.hourly.time.slice(6, 19).map((item, i) =>
            <Card key={i} 
            time={props.weatherData.hourly.time[i + 6]}
            temperature = {props.weatherData.hourly.temperature_2m[i + 6]}
            windSpeed = {props.weatherData.hourly.windspeed_120m[i + 6]}
            humidity = {props.weatherData.hourly.relativehumidity_2m[i + 6]}
            cloudCover = {props.weatherData.hourly.cloudcover_mid[i + 6]}

            //units
            temperatureUnit = {props.weatherData.hourly_units.temperature_2m}
            windSpeedUnit = {props.weatherData.hourly_units.windspeed_120m}
            humidityUnit = {props.weatherData.hourly_units.relativehumidity_2m}
            cloudCoverUnit = {props.weatherData.hourly_units.cloudcover_mid}

            />
        )}
      </div>
    )
}

export default Cardlist;