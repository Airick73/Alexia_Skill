import {
	HandlerInput,
	RequestHandler,
} from 'ask-sdk-core';
import {
	Response,
} from 'ask-sdk-model';

export const LaunchRequestHandler: RequestHandler = {
	canHandle(handlerInput: HandlerInput): boolean {
		const request = handlerInput.requestEnvelope.request;
		return request.type === 'LaunchRequest';
	},
	handle(handlerInput: HandlerInput): Response {
		const speechText = 'Hi, this is the What\'s Weather Skill! Ask me the weather!';

		return handlerInput.responseBuilder
			.speak(speechText)
			.reprompt(speechText)
			.withSimpleCard('Hi, this is the What\'s Weather Skill! Ask me the weather!', speechText)
			.getResponse();
	},
};
