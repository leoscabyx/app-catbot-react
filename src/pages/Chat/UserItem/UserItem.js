import React from 'react';
import './UserItem.css';

const UserItem = ({ text }) => {
    return (
        <div className='user-item-container'>
            <img src='' alt=''/>
            <div className='user-item-message'>
                <label> {text} </label>
            </div>
            
        </div>
    )
};

export default UserItem;