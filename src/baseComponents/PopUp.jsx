import React from 'react';
import style from './Weather.module.css';

export const PopUp = () => {
    return(
        <div id='popup' className={style.popup}>
            <div className={style.popupBody}>
                <div className={style.popupContent}>
                    <div href='' className={style.popupClose}>X</div>
                    <div className={style.popupText}>Пожалуйста, заполните поле</div>
                </div>
            </div>
        </div>
    )
}