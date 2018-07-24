"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skill_lilasoft_toolkit_1 = require("skill-lilasoft-toolkit");
const chai_1 = require("chai");
const Constants_1 = require("../../src/Constants");
const IntentHandlers_1 = require("../../src/IntentHandlers");
describe("StopIntentHandler", () => {
    describe("constructor", () => {
        it("it calls super() with correct parameters", () => {
            const handler = new IntentHandlers_1.StopIntentHandler();
            const intentHandler = handler;
            chai_1.assert.equal(intentHandler.intentName, skill_lilasoft_toolkit_1.STOP_INTENT);
            chai_1.assert.equal(intentHandler.messages, Constants_1.EXIT_MESSAGES);
            chai_1.assert.equal(intentHandler.reprompts, undefined);
        });
    });
});
//# sourceMappingURL=StopIntentHandler.spec.js.map