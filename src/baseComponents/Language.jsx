import React from 'react';
import style from './Weather.module.css';
import {setLanguageAction}from '../bll/store/reducers/actions';
import {connect} from "react-redux";

const Language = (props) => {
    console.log(props)
    // const {
    //     languageReducer: { language }
    // } = props;
 
    return (
        <div className={style.chooseLang}>
        <select className={style.selectBox} id="selectBox"
            onChange={(e) => props.setLanguage(e.target.value)}>
            <option selected={props.value} value='ru'>ru</option>
            <option value='en'>en</option>
        </select>
    </div>
    )
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
export default connect(mapStateToProps, mapDispatchToProps)(Language);