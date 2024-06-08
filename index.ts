import { Context, APIGatewayProxyResult, APIGatewayEvent } from 'aws-lambda';

import * as AlexaSkillHandlers from './ask_handlers';

export const handler = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
	console.log(`Handlers: ${AlexaSkillHandlers}`);
	console.log(`Event: ${JSON.stringify(event, null, 2)}`);
	console.log(`Context: ${JSON.stringify(context, null, 2)}`);
	return {
		statusCode: 200,
		body: JSON.stringify({
			message: 'hello world',
		}),
	};
};
