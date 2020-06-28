import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade'
import './Chat.css';
import CatItem from './CatItem/CatItem';
import UserItem from './UserItem/UserItem';
import InputChat from './InputChat/InputChat';
import Select from './Select/Select';

import { doing, aboutMe } from '../../data/actions'

const Chat = () => {

    let idCounter = 0;

    const [ msg, setMsg ] = useState({});

    const [ openSelect, setOpenSelect ] = useState(false);

    const [ chat, setChat ] = useState([
        {
            id: 0,
            emitter: 'Cat',
            msg: ['Hola que tal, como te llamas', ' Como estas?']
        }
    ]);

    useEffect( () => {
        // Aca espera un efecto
        if(chat.length === 2){
            setTimeout(()=>firstResponse(msg.msg), 500)
            setMsg({ ...msg, msg: ''})
            setTimeout(()=>setOpenSelect(true), 600)
        }
    }, [chat]);

    function firstResponse(name) {
        let newChat = {
            id: idCounter + 2,
            emitter: 'Cat',
            msg : [
                'Mucho gusto, ' + name + '!', 'Mi nombre es Dimitri, soy un catbot aun en desarrollo','Eso quiere decir que un no estoy preparado para tus preguntas',
                'Lo que no significa que no podamos interactiar',
                'Haceme una pregunta de la lista, y con gusto te respondere' 
            ]
        }

        if(newChat){
            setChat([ ...chat, newChat])
        }
    };

    function getMeMessage(value) {
        idCounter = idCounter + 1;
        setMsg({
            id: idCounter,
            emitter: 'User',
            msg: value
        })
    }

    function sendMessage(e) {
        e.preventDefault();
        setChat([ ...chat, msg])
    }

    let options = [
        {
            id: 'What are you doing?',
            text: 'Que Haces?',
            
        },
        /* {
            id: 'Send me a meme',
            text: 'asdasd',
            
        }, */
        {
            id: 'Tell me about you',
            text: 'Cuentame sobre ti?',
            
        }
    ];

    const [ interactions, setInteractions ] = useState([]);

    function handleSelectOptions(value) {
        let result;
        switch (value) {
            case 'What are you doing?':
                result = doing[Math.floor(Math.random() * doing.length)];
                if(result){
                    setInteractions([ ...interactions, result.msg ]);
                }
                break;
            case 'Tell me about you':
                result = aboutMe[Math.floor(Math.random() * aboutMe.length)];
                if(result){
                    setInteractions([ ...interactions, result.msg ]);
                }
            default:
                // no hay valores console
                break;
        }
    }
    //console.log('chat', chat);
    //console.log('msg', msg);



    return (
        <div className="chatbot-chat-container">
            <div className="chatbot-chat-content">
                <div className="chatbot-chat">
                    <div className="chatbot-chat-container-body">
                        {
                            chat.map((message, index) => 
                                message.emitter === 'Cat'
                                    ? <CatItem key={index} text={message.msg} />
                                    : <UserItem key={index} text={message.msg} />
                            ) 
                        }
                        { openSelect &&
                            <Fade right>
                                <Select
                                handleSelectOptions={handleSelectOptions}
                                options={options}
                                />
                            </Fade>
                        }
                        {
                            interactions.length > 0 && interactions.map((interacion, index) =>
                            <>
                                <Fade left>
                                    <CatItem key={index} text={interacion} />
                                </Fade>
                                <Fade right>
                                    <Select
                                    key={index}
                                    handleSelectOptions={handleSelectOptions}
                                    options={options}
                                    />
                                </Fade>

                            </>
                            )
                        }
                        
                    </div>
                    
                    <div className="chatbot-chat-container-input">
                        <InputChat
                        chat={chat}
                        msg={msg.msg}
                        getMeMessage={getMeMessage}
                        sendMessage={sendMessage}
                        />
                    </div>
                </div>

            </div>
            
        </div>
    )
};

export default Chat;