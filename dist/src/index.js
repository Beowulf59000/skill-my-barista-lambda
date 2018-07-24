"use strict";
/* eslint-disable  func-names */
/* eslint-disable  no-console */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ask_sdk_1 = require("ask-sdk");
const Handlers_1 = require("./Handlers");
const IntentHandlers_1 = require("./IntentHandlers");
function handler(event, context, callback) {
    return __awaiter(this, void 0, void 0, function* () {
        const factory = ask_sdk_1.SkillBuilders.standard()
            .addRequestHandlers(new Handlers_1.LaunchRequestHandler(), new IntentHandlers_1.HelpIntentHandler(), new IntentHandlers_1.CancelIntentHandler(), new IntentHandlers_1.StopIntentHandler(), new Handlers_1.SessionEndedRequestHandler(), new IntentHandlers_1.RecipeSuggestionIntentHandler(), new IntentHandlers_1.RecipeIntentHandler(), new IntentHandlers_1.NumberOfRecipesIntentHandler())
            .addErrorHandlers(new Handlers_1.ErrorHandler());
        const skill = factory.create();
        try {
            const responseEnvelope = yield skill.invoke(event, context);
            return callback(null, responseEnvelope);
        }
        catch (error) {
            return callback(error);
        }
    });
}
exports.handler = handler;
//# sourceMappingURL=index.js.map