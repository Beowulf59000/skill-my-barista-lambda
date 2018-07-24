"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skill_lilasoft_toolkit_1 = require("skill-lilasoft-toolkit");
const chai_1 = require("chai");
const Constants_1 = require("../../src/Constants");
const IntentHandlers_1 = require("../../src/IntentHandlers");
describe("HelpIntentHandler", () => {
    describe("constructor", () => {
        it("it calls super() with correct parameters", () => {
            const handler = new IntentHandlers_1.HelpIntentHandler();
            const intentHandler = handler;
            chai_1.assert.equal(intentHandler.intentName, skill_lilasoft_toolkit_1.HELP_INTENT);
            chai_1.assert.equal(intentHandler.messages, Constants_1.HELP_MESSAGES);
            chai_1.assert.equal(intentHandler.reprompts, Constants_1.HELP_REPROMPTS);
        });
    });
});
//# sourceMappingURL=HelpIntentHandler.spec.js.map