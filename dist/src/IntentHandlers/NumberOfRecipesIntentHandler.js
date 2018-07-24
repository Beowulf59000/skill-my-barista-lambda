"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Constants_1 = require("../Constants");
const Intents_1 = require("../Intents");
const skill_lilasoft_toolkit_1 = require("skill-lilasoft-toolkit");
class NumberOfRecipesIntentHandler extends skill_lilasoft_toolkit_1.LilaIntentHandler {
    constructor() {
        super(Intents_1.NUMBER_OF_RECIPES_INTENT, Constants_1.NUMBER_OF_RECIPES_MESSAGES, null);
    }
}
exports.default = NumberOfRecipesIntentHandler;
;
//# sourceMappingURL=NumberOfRecipesIntentHandler.js.map