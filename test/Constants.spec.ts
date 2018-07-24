import 'mocha';
import {expect, assert } from 'chai';
import { SKILL_NAME, WELCOME_MESSAGES, WELCOME_REPROMPTS, HELP_MESSAGES } from '../src/Constants';

describe('Constants', () => {
    it('Constants SKILL_NAME must be defined', () => {
        expect(SKILL_NAME).to.not.be.undefined;
    });

    it('Constants WELCOME_MESSAGES must be defined', () => {
        expect(WELCOME_MESSAGES).to.not.be.undefined;
    });

    it('Constants WELCOME_MESSAGES should equals 5', () => {
        assert.equal(WELCOME_MESSAGES.length, 5);
    });

    it('Constants WELCOME_REPROMPTS must be defined', () => {
        expect(WELCOME_REPROMPTS).to.not.be.undefined;
    });

    it('Constants WELCOME_REPROMPTS should equals 4', () => {
        assert.equal(WELCOME_REPROMPTS.length, 4);
    });

    it('Constants HELP_MESSAGES must be defined', () => {
        expect(HELP_MESSAGES).to.not.be.undefined;
    });

    it('Constants HELP_MESSAGES should equals 1', () => {
        assert.equal(HELP_MESSAGES.length, 1);
    });
});