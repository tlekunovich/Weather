let initialState = {
    weatherData: {},
};

const WeatherDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_WEATHER_DATA': {
            // console.log('DATA', action)
            return {...state, weatherData: action.data}
        }
        default:
            return state;

    }

};

export default WeatherDataReducer;