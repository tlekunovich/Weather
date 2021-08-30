import React from 'react';
import style from './Weather.module.css';


export const WeatherBody = (props) => {

    const { name, weather, rend, main, wind, language, weatherData } = props
    const NotFound = weatherData.cod === "404";
    const langHumidity = language === 'ru' ? 'влажность' : 'humidity';
    const langWind = language === 'ru' ? 'скорость ветра' : 'wind';
    const langUnit = language === 'ru' ? 'км/ч' : 'km/h';
    const cityNotFound = language === 'ru' ? 'город не найден' : 'city not found';

    return (
        <div className={style.searchResult}>
            <div className={style.nameWeather}>
                <div className={style.nameCity}>{name} </div>
                <div className={style.weatherCity}> {weather?.[0].description}</div>
            </div>
            {rend && <div className={style.mainInf}>
                {NotFound ?
                    (<div className={style.mainInf}>
                        <div className={style.cityNotFound}>{cityNotFound}</div>
                    </div>)
                    : (<div className={style.mainInf}>
                        <img className={style.img} alt=''
                        src={`https://openweathermap.org/img/w/${weather?.[0].icon}.png`} 
                        />
                        <div className={style.temp}>
                            {Math.trunc(main?.temp)}°C
                        </div>

                        <div className={style.moreInf}>
                            <div className={style.humidity}>
                                {`${langHumidity}: ${main?.humidity} %`}
                            </div>
                            <div className={style.wind}>
                                {`${langWind}: ${wind?.speed} ${langUnit}`}
                            </div>
                        </div>
                        
                    </div>)}

            </div>}
        </div>

    )
}