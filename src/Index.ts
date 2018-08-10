/* eslint-disable  func-names */
/* eslint-disable  no-console */

import { SkillBuilders } from "ask-sdk";
import {
  ErrorHandler,
  LaunchRequestHandler,
  SessionEndedRequestHandler
} from "./Handlers";
import {
  CancelIntentHandler,
  StopIntentHandler,
  HelpIntentHandler,
  NumberOfRecipesIntentHandler,
  RecipeIntentHandler,
  RecipeSuggestionIntentHandler
} from "./IntentHandlers";
import { RequestEnvelope, ResponseEnvelope } from "ask-sdk-model";
import { LambdaHandler } from 'ask-sdk-core/dist/skill/factory/BaseSkillFactory';
 
const handler: LambdaHandler = SkillBuilders.custom()
    .addRequestHandlers(
      new LaunchRequestHandler(),
      new HelpIntentHandler(),
      new CancelIntentHandler(),
      new StopIntentHandler(),
      new SessionEndedRequestHandler(),
      new RecipeSuggestionIntentHandler(),
      new RecipeIntentHandler(),
      new NumberOfRecipesIntentHandler()
)
.addErrorHandlers(new ErrorHandler())
.lambda();

export { handler };

// export async function handler(
//   event: RequestEnvelope,
//   context: any,
//   callback: any
// ): Promise<void> {
//   const factory = SkillBuilders.standard()
//     .addRequestHandlers(
//       new LaunchRequestHandler(),
//       new HelpIntentHandler(),
//       new CancelIntentHandler(),
//       new StopIntentHandler(),
//       new SessionEndedRequestHandler(),
//       new RecipeSuggestionIntentHandler(),
//       new RecipeIntentHandler(),
//       new NumberOfRecipesIntentHandler()
//     )
//     .addErrorHandlers(new ErrorHandler());

//   const skill = factory.create();

//   try {
//     const responseEnvelope: ResponseEnvelope = await skill.invoke(
//       event,
//       context
//     );
//     return callback(null, responseEnvelope);
//   } catch (error) {
//     return callback(error);
//   }
// }
