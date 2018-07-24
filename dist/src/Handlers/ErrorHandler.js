"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skill_lilasoft_toolkit_1 = require("skill-lilasoft-toolkit");
const Constants_1 = require("../Constants");
class ErrorHandler extends skill_lilasoft_toolkit_1.LilaRequestHandler {
    constructor() {
        super(null, Constants_1.ERROR_MESSAGES, Constants_1.ERROR_REPROMPTS);
    }
}
exports.default = ErrorHandler;
;
//# sourceMappingURL=ErrorHandler.js.map