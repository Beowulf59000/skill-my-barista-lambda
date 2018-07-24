import { RECIPE_SUGGESTION_INTENT } from "../Intents";
import { RECIPE_SUGGESTION_MESSAGES, RECIPE_INGREDIENTS_MESSAGES } from '../Constants';
import { LilaIntentHandler } from "skill-lilasoft-toolkit";

export default class RecipeSuggestionIntentHandler extends LilaIntentHandler {   
    constructor() {
        super(RECIPE_SUGGESTION_INTENT, RECIPE_SUGGESTION_MESSAGES, RECIPE_INGREDIENTS_MESSAGES);
    }
};