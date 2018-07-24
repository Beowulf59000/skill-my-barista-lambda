"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Constants_1 = require("../Constants");
const skill_lilasoft_toolkit_1 = require("skill-lilasoft-toolkit");
class LaunchRequestHandler extends skill_lilasoft_toolkit_1.LilaRequestHandler {
    constructor() {
        super(skill_lilasoft_toolkit_1.LAUNCH_REQUEST, Constants_1.WELCOME_MESSAGES, Constants_1.WELCOME_REPROMPTS);
    }
}
exports.default = LaunchRequestHandler;
;
//# sourceMappingURL=LaunchRequestHandler.js.map