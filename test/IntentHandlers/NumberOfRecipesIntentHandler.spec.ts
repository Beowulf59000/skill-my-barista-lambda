import { LilaIntentHandler } from 'skill-lilasoft-toolkit';
import { assert } from "chai";
import { NUMBER_OF_RECIPES_MESSAGES } from "../../src/Constants";
import { NumberOfRecipesIntentHandler } from "../../src/IntentHandlers";
import { NUMBER_OF_RECIPES_INTENT } from '../../src/Intents';

describe("NumberOfRecipesIntentHandler", () => {
    describe("constructor", () => {
        it("it calls super() with correct parameters", () => {
            const handler = new NumberOfRecipesIntentHandler();
            const intentHandler = <LilaIntentHandler>handler;
            assert.equal(intentHandler.intentName, NUMBER_OF_RECIPES_INTENT);
            assert.equal(intentHandler.messages, NUMBER_OF_RECIPES_MESSAGES);
            assert.equal(intentHandler.reprompts, undefined);
        });
    });
});