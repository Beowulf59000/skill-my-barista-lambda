import { LilaIntentHandler, CANCEL_INTENT } from 'skill-lilasoft-toolkit';
import { assert } from "chai";
import { EXIT_MESSAGES } from "../../src/Constants";
import { CancelIntentHandler } from "../../src/IntentHandlers";

describe("CancelIntentHandler", () => {
    describe("constructor", () => {
        it("it calls super() with correct parameters", () => {
            const handler = new CancelIntentHandler();
            const intentHandler = <LilaIntentHandler>handler;
            assert.equal(intentHandler.intentName, CANCEL_INTENT);
            assert.equal(intentHandler.messages, EXIT_MESSAGES);
            assert.equal(intentHandler.reprompts, undefined);
        });
    });
});