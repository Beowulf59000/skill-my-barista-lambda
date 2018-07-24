"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const Constants_1 = require("../src/Constants");
describe('Constants', () => {
    it('Constants SKILL_NAME must be defined', () => {
        chai_1.expect(Constants_1.SKILL_NAME).to.not.be.undefined;
    });
    it('Constants WELCOME_MESSAGES must be defined', () => {
        chai_1.expect(Constants_1.WELCOME_MESSAGES).to.not.be.undefined;
    });
    it('Constants WELCOME_MESSAGES should equals 5', () => {
        chai_1.assert.equal(Constants_1.WELCOME_MESSAGES.length, 5);
    });
    it('Constants WELCOME_REPROMPTS must be defined', () => {
        chai_1.expect(Constants_1.WELCOME_REPROMPTS).to.not.be.undefined;
    });
    it('Constants WELCOME_REPROMPTS should equals 4', () => {
        chai_1.assert.equal(Constants_1.WELCOME_REPROMPTS.length, 4);
    });
    it('Constants HELP_MESSAGES must be defined', () => {
        chai_1.expect(Constants_1.HELP_MESSAGES).to.not.be.undefined;
    });
    it('Constants HELP_MESSAGES should equals 1', () => {
        chai_1.assert.equal(Constants_1.HELP_MESSAGES.length, 1);
    });
});
//# sourceMappingURL=Constants.spec.js.map