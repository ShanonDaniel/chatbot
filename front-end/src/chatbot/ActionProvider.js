//define responses

class ActionProvider {
  	constructor(createChatBotMessage, setStateFunc, createClientMessage, stateRef, createCustomMessage) {
		this.createChatBotMessage = createChatBotMessage;
		this.setState = setStateFunc;
		this.createClientMessage = createClientMessage;
		this.stateRef = stateRef;
		this.createCustomMessage = createCustomMessage;
	}

  	botMessage = (botMessage, imageUrl) => {
		const message = this.createCustomMessage('', 'custom', {payload:{message: botMessage, imageUrl: imageUrl}});
		// const message = this.createChatBotMessage(botMessage);
		// console.log(message);
		this.addMessageToState(message);
  	};

  	clientMessage = (clientMessage) => {
		const message = this.createClientMessage(clientMessage);
		this.addMessageToState(message);
  	};
  	
  	addMessageToState = (message) => {
		this.setState((prevstate) => ({
			...prevstate,
			messages: [...prevstate.messages, message],
		}));
  	};
}

export default ActionProvider;
