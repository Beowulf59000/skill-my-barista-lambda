"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Constants_1 = require("../Constants");
const skill_lilasoft_toolkit_1 = require("skill-lilasoft-toolkit");
class StopIntentHandler extends skill_lilasoft_toolkit_1.LilaIntentHandler {
    constructor() {
        super(skill_lilasoft_toolkit_1.STOP_INTENT, Constants_1.EXIT_MESSAGES);
    }
}
exports.default = StopIntentHandler;
;
//# sourceMappingURL=StopIntentHandler.js.map