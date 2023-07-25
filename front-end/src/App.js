import React, {	useState } from "react";
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css';
import { ConditionallyRender } from "react-util-kit"

import Particles from "react-tsparticles";
import { particlesOptions } from "./Particles/ParticleOptions";

import ActionProvider from "./chatbot/ActionProvider";
import MessageParser from "./chatbot/MessageParser";
import config from "./chatbot/config";


import ChatBubbleIcon from "./assets/icons/icons8-chat-bubble-48.png";

import "./styles/App.css";



export default function App() {
	const [showChatbot, toggleChatbot] = useState(false);
	
	return (
		<div className = "App">
			<div className = "App-body">
			<Particles options={particlesOptions} />
				<div className = "app-chatbot-container" >
					<ConditionallyRender ifTrue = { showChatbot } show = 
					{
						<Chatbot
							config = { config }
							messageParser = { MessageParser	}
							actionProvider = { ActionProvider }
						/>
					}
					/>
			</div>
			<button className = "app-chatbot-button" 
			onClick = {() => toggleChatbot((prev) => !prev)} >
				<div className = "app-chatbot-button-icon" >
					<img src = { ChatBubbleIcon }/>
				</div>
			</button>
		</div>
	</div>    
	);
}
