let initialState = {
   language: 'ru',
};

const LanguageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LANGUAGE': {
            console.log('lang',action)
            return {...state, language: action.value}
        }

        default:
            return state;

    }

};

export default LanguageReducer;