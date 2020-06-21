import React from 'react';
import './InputChat.css';

const InputChat = () => {
    return (
        <form className="chatbot-chat-input-container">
            <input
            type="text"
            placeholder="Ingresa tu nombre"
            
            />
            <button type="submit" />
        </form>
    )
};

export default InputChat;