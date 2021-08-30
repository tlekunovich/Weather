import {CONSTANTS} from '../../constants'

export const setDataLoginAction = (data) => ({
    type: CONSTANTS.LOGIN.SET_LOGIN_DATA,
    data: data
});

export const setWeatherDataAction = (data) => ({

    type: CONSTANTS.LOGIN.SET_WEATHER_DATA,
    data: data
});

export const setCityInputAction = (data) => ({
    type: CONSTANTS.LOGIN.SET_CITY_INPUT,
    data: data
});

export const setLanguageAction = (lang) => ({
    type: CONSTANTS.LOGIN.SET_LANGUAGE,
    value: lang
});

export const setCitiesAction = (data) => {
    console.log('###',data)
    debugger
    return({
    type: CONSTANTS.LOGIN.SET_SITIES,
    data: data
})};



