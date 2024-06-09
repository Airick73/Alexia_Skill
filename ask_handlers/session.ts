import { RequestHandler, HandlerInput } from "ask-sdk";

import { Response, SessionEndedRequest } from 'ask-sdk-model';

export const SessionEndedRequestHandler : RequestHandler = {
    canHandle(handlerInput : HandlerInput) : boolean {
      const request = handlerInput.requestEnvelope.request;    
      return request.type === 'SessionEndedRequest';
    },
    handle(handlerInput : HandlerInput) : Response {
      console.log(`Session ended with reason: ${(handlerInput.requestEnvelope.request as SessionEndedRequest).reason}`);
  
      return handlerInput.responseBuilder.getResponse();
    },
  };
  
  