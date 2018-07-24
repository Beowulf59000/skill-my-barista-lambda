"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const Constants_1 = require("../../src/Constants");
const IntentHandlers_1 = require("../../src/IntentHandlers");
const Intents_1 = require("../../src/Intents");
describe("RecipeSuggestionIntentHandler", () => {
    describe("constructor", () => {
        it("it calls super() with correct parameters", () => {
            const handler = new IntentHandlers_1.RecipeSuggestionIntentHandler();
            const intentHandler = handler;
            chai_1.assert.equal(intentHandler.intentName, Intents_1.RECIPE_SUGGESTION_INTENT);
            chai_1.assert.equal(intentHandler.messages, Constants_1.RECIPE_SUGGESTION_MESSAGES);
            chai_1.assert.equal(intentHandler.reprompts, Constants_1.RECIPE_INGREDIENTS_MESSAGES);
        });
    });
});
//# sourceMappingURL=RecipeSuggestionIntentHandler.spec.js.map