"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Intents_1 = require("../Intents");
const Constants_1 = require("../Constants");
const skill_lilasoft_toolkit_1 = require("skill-lilasoft-toolkit");
class RecipeSuggestionIntentHandler extends skill_lilasoft_toolkit_1.LilaIntentHandler {
    constructor() {
        super(Intents_1.RECIPE_SUGGESTION_INTENT, Constants_1.RECIPE_SUGGESTION_MESSAGES, Constants_1.RECIPE_INGREDIENTS_MESSAGES);
    }
}
exports.default = RecipeSuggestionIntentHandler;
;
//# sourceMappingURL=RecipeSuggestionIntentHandler.js.map