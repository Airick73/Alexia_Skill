import { RequestHandler, HandlerInput,  ErrorHandler as ErrorHandlerType  } from "ask-sdk";
import  type { Response } from 'ask-sdk-model';

export const ErrorHandler : ErrorHandlerType = {
  canHandle(handlerInput : HandlerInput, error : Error ) : boolean {
    return true;
  },
  handle(handlerInput : HandlerInput, error : Error) : Response {
    console.log(`Error handled: ${error.message}`);

    return handlerInput.responseBuilder
      .speak('Sorry, I don\'t understand your command. Please say it again.')
      .reprompt('Sorry, I don\'t understand your command. Please say it again.')
      .getResponse();
  }
};


  
  