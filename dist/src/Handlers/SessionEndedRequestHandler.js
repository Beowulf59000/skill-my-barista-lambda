"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skill_lilasoft_toolkit_1 = require("skill-lilasoft-toolkit");
class SessionEndedRequestLauncher extends skill_lilasoft_toolkit_1.LilaRequestHandler {
    constructor() {
        super(skill_lilasoft_toolkit_1.SESSION_ENDED_REQUEST);
    }
}
exports.default = SessionEndedRequestLauncher;
;
//# sourceMappingURL=SessionEndedRequestHandler.js.map