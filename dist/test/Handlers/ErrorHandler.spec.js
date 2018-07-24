"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Handlers_1 = require("../../src/Handlers");
const chai_1 = require("chai");
const Constants_1 = require("../../src/Constants");
describe("ErrorHandler", () => {
    describe("constructor", () => {
        it("it calls super() with correct parameters", () => {
            const handler = new Handlers_1.ErrorHandler();
            const lilaRequestHandler = handler;
            chai_1.assert.equal(lilaRequestHandler.requestName, null);
            chai_1.assert.equal(lilaRequestHandler.messages, Constants_1.ERROR_MESSAGES);
            chai_1.assert.equal(lilaRequestHandler.reprompts, Constants_1.ERROR_REPROMPTS);
        });
    });
});
//# sourceMappingURL=ErrorHandler.spec.js.map