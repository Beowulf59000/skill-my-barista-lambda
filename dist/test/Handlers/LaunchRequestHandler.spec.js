"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skill_lilasoft_toolkit_1 = require("skill-lilasoft-toolkit");
const Handlers_1 = require("../../src/Handlers");
const chai_1 = require("chai");
const Constants_1 = require("../../src/Constants");
describe("LaunchRequestHandler", () => {
    describe("constructor", () => {
        it("it calls super() with correct parameters", () => {
            const handler = new Handlers_1.LaunchRequestHandler();
            const lilaRequestHandler = handler;
            chai_1.assert.equal(lilaRequestHandler.requestName, skill_lilasoft_toolkit_1.LAUNCH_REQUEST);
            chai_1.assert.equal(lilaRequestHandler.messages, Constants_1.WELCOME_MESSAGES);
            chai_1.assert.equal(lilaRequestHandler.reprompts, Constants_1.WELCOME_REPROMPTS);
        });
    });
});
//# sourceMappingURL=LaunchRequestHandler.spec.js.map