import {
	HandlerInput,
	RequestHandler,
} from 'ask-sdk-core';
import {
	Response,
} from 'ask-sdk-model';

import {client} from '../weather_api/weather'

export const AskWeatherIntentHandler : RequestHandler = {
	canHandle(handlerInput : HandlerInput) : boolean {
	  const request = handlerInput.requestEnvelope.request;  
	  return request.type === 'IntentRequest'
		&& request.intent.name === 'WeatherToday';
	},
	handle(handlerInput : HandlerInput) : Response {
	  
		
		const speechText = client.response;
  
	    

		return handlerInput.responseBuilder
		.speak(speechText)
		.withSimpleCard('The weather today is sunny.', speechText)
		.getResponse();
	},
  };