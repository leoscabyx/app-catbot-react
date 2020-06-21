import React, { useState } from 'react';
import './Chat.css';
import CatItem from './CatItem/CatItem';
import UserItem from './UserItem/UserItem';
import InputChat from './InputChat/InputChat';

const Chat = () => {

    const [ msg, setMsg ] = useState({});

    const [ chat, setChat ] = useState([
        {
            id: 0,
            emitter: 'x',
            msg: ['Hola que tal Hola que tal', ' Como estas?']
        }
    ])
    return (
        <div className="chatbot-chat-container">
            <div className="chatbot-chat-content">
                <div className="chatbot-chat">
                    <div className="chatbot-chat-container-body">
                        {
                            chat.map((message, index) => 
                                message.emitter === 'Cat'
                                    ? <CatItem key={index} text={message.msg} />
                                    : <UserItem text={message.msg} />
                            ) 
                        }
                        
                        
                        
                    </div>
                    <div className="chatbot-chat-container-input">
                        <InputChat />
                    </div>
                </div>

            </div>
            
        </div>
    )
};

export default Chat;