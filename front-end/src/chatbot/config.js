// Config starter code
import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import CustomMessage from './CustomMessage'

let config = {
	botName: 'Anna',
	
	initialMessages: [
		createChatBotMessage( 
			`Hi, I'm Anna, service provider for real estate.`
		),
		// createCustomMessage('This is custom message test1.', 'custom', {imageUrl: 'https://i.pinimg.com/originals/cf/da/fa/cfdafa4dc6aab40eae1c5315c02b9339.jpg'}),
		// createCustomMessage('This is custom message test2.', 'custom', {imageUrl: 'https://photos.zillowstatic.com/fp/34c92ade45c47059d56a6568ddec5acd-p_e.jpg'})
	],
	customMessages: {
		custom: (props) => <CustomMessage {...props} />,
	},
};

export default config;