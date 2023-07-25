const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
// app.use(cors());

const opnai_api_key = process.env.OPENAI_API_KEY;
const opnai_api_url = process.env.OPENAI_API_URL;
const rapidApi_api_key = process.env.RAPIDAPI_API_KEY;
const rapidApi_api_url = process.env.RAPIDAPI_API_URL;
const port = process.env.PORT;

async function sendMessageToOpenAI(message) {
	try {
		const response = await axios.post(opnai_api_url, {
			model: 'text-davinci-003',
			prompt: message,
			max_tokens: 500,
			temperature: 0.7,
  		}, {
			headers: {
				'Accept': 'application/json',
				'Authorization': `Bearer ${opnai_api_key}`,
			},
  		});
  		const { choices } = response.data;
		const reply = choices[0].text.trim();
		return reply;
		// Do something with the reply
	} catch (error) {
		console.error('Failed to send message:', error);
		return `Failed to send message: ${error}`
	}
}

async function sendMessageToRapidApi(properties) {
	// console.log(properties);
	const options = {
		method: 'GET',
		url: rapidApi_api_url,
		params: properties,
		headers: {
		  'X-RapidAPI-Key': rapidApi_api_key,
		  'X-RapidAPI-Host': 'zillow56.p.rapidapi.com'
		}
	};
	  
	try {
		const response = await axios.request(options);
		// console.log(response.data['results']);
		return response.data['results'][0];
	} catch (error) {
		console.error(error);
		return `Failed to receive response from rapidapi: ${error}`
	}
}

app.post('/message', async (req, res) => {
	try {
		const {message} = req.body;
		// console.log(message);
		const json_format = `{
			"location":"United States",
			"status": "forSale",
			"sortSelection": "priorityscore",
			"price_min": "9",
			"price_max": "8",
			"sqft_min": "7",
			"sqft_max": "7",
			"monthlyPayment_min": "5",
			"monthlyPayment_max": "5",
			"beds_min": "6",
			"beds_max": "6",
			"baths_min": "7",
			"baths_max": "7"
		}`;

		let request_message = `Please output the json format built in some part of ${json_format} including the only real estate info existing in the next sentence and remove the keys and values not existing in the setence.
			location is required and can be address, neighborhood, city, or ZIP code.
			status is optional and can be one of 
				Default : forSale
				-forSale
				-forRent
				-recentlySold.
			sortSelection possible values :
				days: Newest (Default value),
				saved: Date Saved,
				listingstatus: Listing Status,
				mostrecentchange: Most Recent Change,
				globalrelevanceex: Homes for You,
				featured: Verified Source,
				priced: Price (High to Low),
				pricea: Price (Low to High),
				paymentd: Payment (High to Low),
				paymenta: Payment (Low to High),
				beds: Bedrooms,
				baths: Bathrooms,
				size: Square Feet,
				lot: Lot Size,
				zest: Zestimate (High to Low),
				zesta: Zestimate (Low to High),	Sorting possible values :
				days: Newest (Default value),
				saved: Date Saved,
				listingstatus: Listing Status,
				mostrecentchange: Most Recent Change,
				globalrelevanceex: Homes for You,
				featured: Verified Source,
				priced: Price (High to Low),
				pricea: Price (Low to High),
				paymentd: Payment (High to Low),
				paymenta: Payment (Low to High),
				beds: Bedrooms,
				baths: Bathrooms,
				size: Square Feet,
				lot: Lot Size,
				zest: Zestimate (High to Low),
				zesta: Zestimate (Low to High).
			: ${message}`;
		const properties = await sendMessageToOpenAI(request_message);
		console.log(properties)
		
		const rapidapi_response = await sendMessageToRapidApi(JSON.parse(properties));
		request_message = `If ${message} includes real estate info, please use the following json, ${JSON.stringify(rapidapi_response)} to express your answer to the question as a service provider: ${message}. If not, please reply to the message as a service provider. Finally, ask the customer for their contact information, including email and phone number.`
		// console.log(request_message);
		const response = await sendMessageToOpenAI(request_message);
		res.status(200).json({
			message: response,
			imageUrl: rapidapi_response['imgSrc']
		})
	} catch (error) {
		console.log(error);
		res.status(500).send({error});
	}
});

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});
