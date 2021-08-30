let initialState = {
    city: '',
 };
 
 const CityInputReducer = (state = initialState, action) => {
     switch (action.type) {
         case 'SET_CITY_INPUT': {
             return {...state, city: action.data}
         }
 
         default:
             return state;
 
     }
 
 };
 
 export default CityInputReducer;