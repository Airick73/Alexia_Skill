import { Skill } from 'ask-sdk';
import {
  HandlerInput,
  RequestHandler,
  SkillBuilders,
} from 'ask-sdk-core';

import { 
  LaunchRequestHandler, 
  AskWeatherIntentHandler, 
  HelpIntentHandler, 
  CancelAndStopIntentHandler, 
  SessionEndedRequestHandler,
  ErrorHandler
} from './ask_handlers';

export const handler = SkillBuilders.custom()
  .addRequestHandlers(
    LaunchRequestHandler,
    AskWeatherIntentHandler,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler,
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();

  // let skill : Skill; 

// export const handler = async (event : any, context : any) => {
//   console.log(`REQUEST++++${JSON.stringify(event)}`);
//   if (!skill) {
//     skill = SkillBuilders.custom()
//       .addRequestHandlers(
//         LaunchRequestHandler,
//         AskWeatherIntentHandler,
//         HelpIntentHandler,
//         CancelAndStopIntentHandler,
//         SessionEndedRequestHandler,
//       )
//       .addErrorHandlers(ErrorHandler)
//       .create();
//   }

//   const response = await skill.invoke(event, context);
//   console.log(`RESPONSE++++${JSON.stringify(response)}`);

//   return response;
// };

// import { Context, APIGatewayProxyResult, APIGatewayEvent, Handler } from 'aws-lambda';

// import * as AlexaSkillHandlers from './ask_handlers';
// import { Skill } from 'ask-sdk-core';
// import { SkillBuilders } from 'ask-sdk';

// let skill : Skill;

// export const handler : Handler = async (event, context) => {
//   console.log(`REQUEST++++${JSON.stringify(event)}`);
//   if (!skill) {
//     skill = SkillBuilders.custom()
//       .addRequestHandlers(
//         AlexaSkillHandlers.LaunchRequestHandler,
//         AlexaSkillHandlers.AskWeatherIntentHandler,
//         AlexaSkillHandlers.HelpIntentHandler,
//         AlexaSkillHandlers.CancelAndStopIntentHandler,
//         AlexaSkillHandlers.SessionEndedRequestHandler,
//       )
//       .addErrorHandlers(AlexaSkillHandlers.ErrorHandler)
//       .create();
//   }

//   const response = await skill.invoke(event, context);
//   console.log(`RESPONSE++++${JSON.stringify(response)}`);

//   return response;
// };
