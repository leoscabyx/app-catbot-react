import React from 'react';
import Fade from 'react-reveal/Fade'
import './Home.css';
import Cat from './components/Cat/Cat';
const Home = ({ history }) => {
    return (
        <div className='home-catbot-container'>
            <div className='home-catbot-content'>
                <Cat history={history} />
                <div className='home-catbot-greeting'>
                    <Fade opposite>
                        <h1>!Hola Humano!</h1>
                    </Fade>
                    <Fade opposite>
                        <label>Queres Charlar</label>
                        <label>Click sobre mi para comenzar ;)</label>
                    </Fade>
                </div>
                
            </div>
        </div>
    )
}

export default Home