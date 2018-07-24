"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Data_1 = require("../Data");
const Recipe_1 = require("../Models/Recipe");
const skill_lilasoft_toolkit_1 = require("skill-lilasoft-toolkit");
class RecipesHelper {
    constructor(messagesHelper) {
        this.messagesHelper = (messagesHelper !== undefined) ? messagesHelper : new skill_lilasoft_toolkit_1.MessagesHelper();
    }
    getRandomRecipe() {
        const recipeName = this.messagesHelper.getRandomMessage(Object.keys(Data_1.RECIPE_NAMES));
        return this.getRecipe(recipeName);
    }
    ;
    getRecipe(recipeName) {
        return new Recipe_1.default(Data_1.RECIPE_NAMES[recipeName], Data_1.RECIPE_INGREDIENTS[recipeName], Data_1.RECIPE_STEPS[recipeName]);
    }
    ;
}
exports.default = RecipesHelper;
;
//# sourceMappingURL=RecipesHelper.js.map