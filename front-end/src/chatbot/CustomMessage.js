import React from 'react';
import 'react-chatbot-kit/build/main.css';
import '../styles/App.css'

const CustomMessage = (props) => {
    console.log(props);
    return (
        <div className="react-chatbot-kit-chat-bot-message-container">
            <div className="react-chatbot-kit-chat-bot-avatar">
                <div className="react-chatbot-kit-chat-bot-avatar-container">
                    <p className="react-chatbot-kit-chat-bot-avatar-letter">B</p>
                </div>
            </div>

            <div className="react-chatbot-kit-chat-bot-message">
                <img
                    src = {props.payload.imageUrl}
                    style={{ width: '100%' }}
                />
                
                <span>
                    {props.payload.message}
                </span>
                <div className="react-chatbot-kit-chat-bot-message-arrow" />
            </div>
        </div>
    );
};

export default CustomMessage;