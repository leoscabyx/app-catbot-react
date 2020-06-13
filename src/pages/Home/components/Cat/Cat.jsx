import React from 'react';
import Lottie from 'react-lottie';
import './Cat.css';
import animationCat from './cat-data.json';

const Cat = ({ history }) => {

    const defaultOption = {
        loop: true, 
        autoplay: true,
        animationData: animationCat
    }

    function handleClick() {
        history.push('/chat')
    }

    return (
        <div className='cat-container' onClick={handleClick}>
            <Lottie
            options={defaultOption}
            />
            
        </div>
    )
};

export default Cat;