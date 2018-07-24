import { LilaRequestHandler } from "skill-lilasoft-toolkit";
import { ErrorHandler } from "../../src/Handlers";
import { assert } from "chai";
import { ERROR_REPROMPTS, ERROR_MESSAGES } from "../../src/Constants";

describe("ErrorHandler", () => {
    describe("constructor", () => {
        it("it calls super() with correct parameters", () => {
            const handler = new ErrorHandler();
            const lilaRequestHandler = <LilaRequestHandler>handler;
            assert.equal(lilaRequestHandler.requestName, null);
            assert.equal(lilaRequestHandler.messages, ERROR_MESSAGES);
            assert.equal(lilaRequestHandler.reprompts, ERROR_REPROMPTS);
        });
    });
});