import { LilaRequestHandler, LAUNCH_REQUEST } from "skill-lilasoft-toolkit";
import { LaunchRequestHandler } from "../../src/Handlers";
import { assert } from "chai";
import { WELCOME_REPROMPTS, WELCOME_MESSAGES } from "../../src/Constants";

describe("LaunchRequestHandler", () => {
    describe("constructor", () => {
        it("it calls super() with correct parameters", () => {
            const handler = new LaunchRequestHandler();
            const lilaRequestHandler = <LilaRequestHandler>handler;
            assert.equal(lilaRequestHandler.requestName, LAUNCH_REQUEST);
            assert.equal(lilaRequestHandler.messages, WELCOME_MESSAGES);
            assert.equal(lilaRequestHandler.reprompts, WELCOME_REPROMPTS);
        });
    });
});