import React from 'react';
import './Select.css';

const Select = ({options, handleSelectOptions}) => {
    return (
        <div className='selector-content'>
            <div className='selector-container'>
                {options.map((op)=>{
                    return <div
                    onClick={ () => handleSelectOptions(op.id)}
                    key={op.id}
                    className='selector-item'
                    >
                        <label>{op.text}</label>
                    </div>   
                })}
            </div>
        </div>
    );
}

export default Select;