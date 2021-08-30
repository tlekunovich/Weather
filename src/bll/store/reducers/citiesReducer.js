let initialState = {
    cities: [],
};

const CitiesReducer = (state = initialState, action) => {
    console.log('REDUCR',action)
    switch (action.type) {
        case 'SET_SITIES': {
            console.log('cities', action)
            return {...state, cities: action.data}
        }
        default:
            return state;

    }

};

export default CitiesReducer;