import { LilaIntentHandler, HELP_INTENT } from 'skill-lilasoft-toolkit';
import { assert } from "chai";
import { HELP_MESSAGES, HELP_REPROMPTS } from "../../src/Constants";
import { HelpIntentHandler } from "../../src/IntentHandlers";

describe("HelpIntentHandler", () => {
    describe("constructor", () => {
        it("it calls super() with correct parameters", () => {
            const handler = new HelpIntentHandler();
            const intentHandler = <LilaIntentHandler>handler;
            assert.equal(intentHandler.intentName, HELP_INTENT);
            assert.equal(intentHandler.messages, HELP_MESSAGES);
            assert.equal(intentHandler.reprompts, HELP_REPROMPTS);
        });
    });
});