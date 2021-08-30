import React from 'react';
import style from './Weather.module.css';
import Popup from 'reactjs-popup';
import { FaSearch } from "react-icons/fa";
import {setCityInputAction,setWeatherDataAction,setCitiesAction} from '../bll/store/reducers/actions';
import { connect } from "react-redux";

const WeatherSearchBlock = (props) => {

     const {
        languageReducer: { language },
        cityInputReducer: { city },
        // weatherDataReducer: {weatherData},
        citiesReducer:{cities},
        requestFromWeather
    } = props;
     
    const popUpText = language === 'ru' ? 'Пожалуйста, заполните поле' : 'Please fill out this field';
    
    const startPopUp = city === ('');
    
    const isDisabledSearch = () => {
        if (city.length >= 3 ) {
            
            requestFromWeather()
            
        }
    }

const keyPress =(event)=>{
    if (city.length >= 3) {
        if (event.key === 'Enter') {
            requestFromWeather()
}
    }}
    
    const trigger =
        <div onClick={isDisabledSearch} >
            <FaSearch className={style.fa} />
        </div>


      const cityList = cities.map((elem, index) => {
          
    return (
                index <= 6 && <option>{elem}</option>
           )
}
)
    return (

        <div className={style.search}>
            <input
                className={style.nameCityInput}
                value={city}
                onChange={(e) => props.setCityInput(e.target.value)}
                list='cities'
                onKeyPress={keyPress}
            />
            <div className={style.datalist}>
                <datalist id="cities" >
                    {cityList}
               </datalist>
            </div>
            {
                startPopUp ?
                    (
                        
                        <Popup
                            trigger={trigger}
                            position="right center">
                            <div className={style.popUp}>{popUpText}</div>
                        </Popup>
                    )

                    : (
                        trigger
                    )
            }
        </div>


    )
}


const mapStateToProps = (state) => {
    return {
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
export default connect(mapStateToProps,mapDispatchToProps)(WeatherSearchBlock);

