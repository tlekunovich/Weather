import React, { useState, useEffect,useRef } from 'react';
import style from './Weather.module.css';
import { WeatherBody } from './WeatherBody';
import WeatherSearchBlock from './WeatherSearchBlock';
import Language from './Language';
import { setCityInputAction, setWeatherDataAction, setCitiesAction } from '../bll/store/reducers/actions';
import { connect } from "react-redux";


const API_KEY = '48964adeb8cfc8f22081713c9b5070cb';
const baseUrl = 'http://api.openweathermap.org/data/2.5';

const Weather = (props) => {
    const {
        languageReducer: { language },
        cityInputReducer: { city },
        weatherDataReducer: { weatherData },
        citiesReducer: { cities }
    } = props;

    const langTitle = language === 'ru' ? 'Погода' : 'Weather';


    const [units] = useState('metric');
    const [typeRequest] = useState('weather');
    const [isLoading, toggleLoading] = useState(false);

    const rend = Object.keys(weatherData).length > 0;
    const { main, weather, name, wind, } = weatherData;


    const addCitiesInList = (newCities) => {
        console.log("newCity",newCities)
        if (!!newCities) {
            console.log("2",newCities)
            props.setCities([...cities, newCities])
            console.log('3',cities,newCities)
            localStorage.setItem('cities', JSON.stringify([...cities, newCities]) );
            props.setCityInput('')
        }
    }

    useEffect(() => {
        const getCitiesInLocalStorage = JSON.parse(localStorage.getItem("cities"))
        if (!!getCitiesInLocalStorage) {
            props.setCities(getCitiesInLocalStorage)
        }

        // if (city.length >= 3) { }
        // props.setWeatherData({})
    }, []
    )


    const requestFromWeather = async () => {
        toggleLoading(true)
        const isQueryParams =
            typeRequest === 'weather' ?
                `q=${city}` : '';
                let url =  `${baseUrl}/${typeRequest}?${isQueryParams}&appid=${API_KEY}&lang=${language}&units=${units}`
                console.log('ACB',url)
        try {
            let resp = await fetch(url);
            resp = await resp.json();
            props.setWeatherData(resp);
            toggleLoading(false);

            const isSetCities = resp.cod === 200 && !cities.includes(city)

            if (isSetCities) {
                addCitiesInList(city)
            }
        } catch {
            toggleLoading(false);
            console.log('Error')
        }
    }


    const loader =
        <div>
            <img className={style.preloader} alt='' src='https://acegif.com/wp-content/uploads/loading-58.gif' />
        </div>;


    return (
        <div className={style.WeatherWindow}>
            <div className={style.weather}>
                <div className={style.titleRow}>
                    <div className={style.title}>
                        {langTitle}
                    </div>
                    <Language />
                   
                </div>


                <WeatherSearchBlock requestFromWeather={requestFromWeather} />
    
                {
                    isLoading ? loader
                        :
                        <WeatherBody
                            startLoading={isLoading}
                            name={name}
                            weather={weather}
                            rend={rend}
                            main={main}
                            wind={wind}
                            language={language}
                            weatherData={weatherData}
                        />
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        loginReducer: state.loginReducer,
        languageReducer: state.languageReducer,
        cityInputReducer: state.cityInputReducer,
        weatherDataReducer: state.weatherDataReducer,
        citiesReducer: state.citiesReducer,
    }

};
const mapDispatchToProps = (dispatch) => {
    return {
        setCityInput(value) {
            dispatch(setCityInputAction(value))
        },
        setWeatherData(value) {
            dispatch(setWeatherDataAction(value))
        },
        setCities(value) {
            dispatch(setCitiesAction(value))
        },
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Weather);
