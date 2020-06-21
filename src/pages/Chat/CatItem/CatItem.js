import React from 'react';
import './CatItem.css';

//Dos formas de importar una imagen
// 1) como una variable
//import catAvatar from 'ruta en assets'
// otra forma
// directo en src de la imagen la ruta con un require 
// require('ruta')

const CatItem = ({ text }) => {
    return (
        <div className='cat-item-container'>
            <img src='' alt=''/>
            <div className='cat-item-message'>
                {text.map((t, index)=>
                    <label key={index}> {t} </label>
                )}
            </div>
            
        </div>
    )
};

export default CatItem;