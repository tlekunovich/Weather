let initialState = {
    cities: [],
    data: {},
    items: '',
    error: '',
};

const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LOGIN_DATA': {
            console.log('DATA',action)
            return {...state, data: action.data}
        }

        default:
            return state;

    }

};

export default LoginReducer;