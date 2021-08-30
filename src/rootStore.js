import { combineReducers } from 'redux';
// import TwoReducer from './multiply_two/TwoReducer';
// import FiveReducer from './multiply_five/FiveReducer';
import LoginReducer from './bll/store/reducers/loginReducer';
import WeatherDataReducer from './bll/store/reducers/weatherDataReducer' ;
import CityInputReducer from  './bll/store/reducers/cityInputReducer';
import LanguageReducer from  './bll/store/reducers/languageReducer';
import CitiesReducer from  './bll/store/reducers/citiesReducer';

const rootReducer = combineReducers({
    loginReducer: LoginReducer,
	weatherDataReducer: WeatherDataReducer,
	cityInputReducer: CityInputReducer,
	languageReducer: LanguageReducer,
	citiesReducer: CitiesReducer,
	})

export default rootReducer;