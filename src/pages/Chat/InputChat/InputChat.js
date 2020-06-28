import React from 'react';
import './InputChat.css';

const InputChat = ({sendMessage, getMeMessage, msg, chat}) => {
    return (
        <form
        onSubmit={ (e) => sendMessage(e)}
        className="chatbot-chat-input-container">
            <input
            disabled={
                chat.length >= 3 ? true : false
            }
            value={msg}
            type="text"
            placeholder={chat.length >= 3 ? "Ya no podes escribir" : "Ingresa tu nombre"}
            onChange={ (e) => getMeMessage(e.target.value)}
            />
            <button type="submit" />
        </form>
    )
};

export default InputChat;