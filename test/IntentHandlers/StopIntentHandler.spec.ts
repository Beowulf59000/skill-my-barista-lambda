import { LilaIntentHandler, STOP_INTENT } from 'skill-lilasoft-toolkit';
import { assert } from "chai";
import { EXIT_MESSAGES } from "../../src/Constants";
import { StopIntentHandler } from "../../src/IntentHandlers";

describe("StopIntentHandler", () => {
    describe("constructor", () => {
        it("it calls super() with correct parameters", () => {
            const handler = new StopIntentHandler();
            const intentHandler = <LilaIntentHandler>handler;
            assert.equal(intentHandler.intentName, STOP_INTENT);
            assert.equal(intentHandler.messages, EXIT_MESSAGES);
            assert.equal(intentHandler.reprompts, undefined);
        });
    });
});