"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Constants_1 = require("../Constants");
const skill_lilasoft_toolkit_1 = require("skill-lilasoft-toolkit");
class HelpIntentHandler extends skill_lilasoft_toolkit_1.LilaIntentHandler {
    constructor() {
        super(skill_lilasoft_toolkit_1.HELP_INTENT, Constants_1.HELP_MESSAGES, Constants_1.HELP_REPROMPTS);
    }
}
exports.default = HelpIntentHandler;
;
//# sourceMappingURL=HelpIntentHandler.js.map