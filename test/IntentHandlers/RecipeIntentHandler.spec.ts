import { LilaIntentHandler } from 'skill-lilasoft-toolkit';
import { assert } from "chai";
import { RECIPE_SUGGESTION_MESSAGES, RECIPE_INGREDIENTS_MESSAGES } from "../../src/Constants";
import { RecipeIntentHandler } from "../../src/IntentHandlers";
import { SPECIFIC_RECIPE_INTENT } from '../../src/Intents';

describe("RecipeIntentHandler", () => {
    describe("constructor", () => {
        it("it calls super() with correct parameters", () => {
            const handler = new RecipeIntentHandler();
            const intentHandler = <LilaIntentHandler>handler;
            assert.equal(intentHandler.intentName, SPECIFIC_RECIPE_INTENT);
            assert.equal(intentHandler.messages, RECIPE_SUGGESTION_MESSAGES);
            assert.equal(intentHandler.reprompts, RECIPE_INGREDIENTS_MESSAGES);
        });
    });
});