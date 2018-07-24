import { LilaIntentHandler } from 'skill-lilasoft-toolkit';
import { assert } from "chai";
import { RECIPE_SUGGESTION_MESSAGES, RECIPE_INGREDIENTS_MESSAGES } from "../../src/Constants";
import { RecipeSuggestionIntentHandler } from "../../src/IntentHandlers";
import { RECIPE_SUGGESTION_INTENT } from '../../src/Intents';

describe("RecipeSuggestionIntentHandler", () => {
    describe("constructor", () => {
        it("it calls super() with correct parameters", () => {
            const handler = new RecipeSuggestionIntentHandler();
            const intentHandler = <LilaIntentHandler>handler;
            assert.equal(intentHandler.intentName, RECIPE_SUGGESTION_INTENT);
            assert.equal(intentHandler.messages, RECIPE_SUGGESTION_MESSAGES);
            assert.equal(intentHandler.reprompts, RECIPE_INGREDIENTS_MESSAGES);
        });
    });
});