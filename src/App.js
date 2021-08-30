import './App.css';
import React from 'react';
import {connect} from "react-redux";
import {setLanguageAction}from './bll/store/reducers/actions';
import Weather from './baseComponents/Weather';


const App = (props) => {
 
   return ( 
    <div className = "App">
    <Weather  />
    </div>
  );

}

const mapStateToProps = (state) => {
  // console.log('STATE',state)
  return {
    loginReducer: state.loginReducer,
    languageReducer: state.languageReducer,
  }
   
};

const mapDispatchToProps = (dispatch) => {
  return {
     
      setLanguage(value) {
        dispatch(setLanguageAction(value))
    },
      

  }
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
