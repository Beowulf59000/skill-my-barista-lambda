"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skill_lilasoft_toolkit_1 = require("skill-lilasoft-toolkit");
const Handlers_1 = require("../../src/Handlers");
const chai_1 = require("chai");
describe("SessionEndedRequestHandler", () => {
    describe("constructor", () => {
        it("it calls super() with correct parameters", () => {
            const handler = new Handlers_1.SessionEndedRequestHandler();
            const lilaRequestHandler = handler;
            chai_1.assert.equal(lilaRequestHandler.requestName, skill_lilasoft_toolkit_1.SESSION_ENDED_REQUEST);
            chai_1.assert.equal(lilaRequestHandler.messages, undefined);
            chai_1.assert.equal(lilaRequestHandler.reprompts, undefined);
        });
    });
});
//# sourceMappingURL=SessionEndedRequestHandler.js.map