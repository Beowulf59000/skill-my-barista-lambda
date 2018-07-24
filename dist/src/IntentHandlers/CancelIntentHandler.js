"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Constants_1 = require("../Constants");
const skill_lilasoft_toolkit_1 = require("skill-lilasoft-toolkit");
class CancelIntentHandler extends skill_lilasoft_toolkit_1.LilaIntentHandler {
    constructor() {
        super(skill_lilasoft_toolkit_1.CANCEL_INTENT, Constants_1.EXIT_MESSAGES);
    }
}
exports.default = CancelIntentHandler;
;
//# sourceMappingURL=CancelIntentHandler.js.map