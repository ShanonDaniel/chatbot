// MessageParser starter code
import axios from "axios";
const baseUrl = process.env.REACT_APP_BASE_URL;

class MessageParser {

	constructor(actionProvider) {
		this.actionProvider = actionProvider;
	}

	async parse(message) {
		const response = await axios.post(`${baseUrl}/message`, {message});
		// console.log(response);
		this.actionProvider.botMessage(response['data']['message'], response['data']['imageUrl']);
	}	
}

export default MessageParser;