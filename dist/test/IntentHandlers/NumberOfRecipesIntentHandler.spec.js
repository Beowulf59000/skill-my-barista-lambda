"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const Constants_1 = require("../../src/Constants");
const IntentHandlers_1 = require("../../src/IntentHandlers");
const Intents_1 = require("../../src/Intents");
describe("NumberOfRecipesIntentHandler", () => {
    describe("constructor", () => {
        it("it calls super() with correct parameters", () => {
            const handler = new IntentHandlers_1.NumberOfRecipesIntentHandler();
            const intentHandler = handler;
            chai_1.assert.equal(intentHandler.intentName, Intents_1.NUMBER_OF_RECIPES_INTENT);
            chai_1.assert.equal(intentHandler.messages, Constants_1.NUMBER_OF_RECIPES_MESSAGES);
            chai_1.assert.equal(intentHandler.reprompts, undefined);
        });
    });
});
//# sourceMappingURL=NumberOfRecipesIntentHandler.spec.js.map