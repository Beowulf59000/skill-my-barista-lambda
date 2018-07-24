import { SPECIFIC_RECIPE_INTENT } from "../Intents";
import { RECIPE_SUGGESTION_MESSAGES, RECIPE_INGREDIENTS_MESSAGES } from '../Constants';
import { LilaIntentHandler } from "skill-lilasoft-toolkit";

export default class RecipeIntentHandler extends LilaIntentHandler {   
    constructor() {
        super(SPECIFIC_RECIPE_INTENT, RECIPE_SUGGESTION_MESSAGES, RECIPE_INGREDIENTS_MESSAGES);
    }
};