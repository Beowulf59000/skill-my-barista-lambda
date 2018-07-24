import { LilaRequestHandler, SESSION_ENDED_REQUEST } from "skill-lilasoft-toolkit";
import { SessionEndedRequestHandler } from "../../src/Handlers";
import { assert } from "chai";

describe("SessionEndedRequestHandler", () => {
    describe("constructor", () => {
        it("it calls super() with correct parameters", () => {
            const handler = new SessionEndedRequestHandler();
            const lilaRequestHandler = <LilaRequestHandler>handler;
            assert.equal(lilaRequestHandler.requestName, SESSION_ENDED_REQUEST);
            assert.equal(lilaRequestHandler.messages, undefined);
            assert.equal(lilaRequestHandler.reprompts, undefined);
        });
    });
});