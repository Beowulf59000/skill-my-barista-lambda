import { NUMBER_OF_RECIPES_MESSAGES } from "../Constants";
import { NUMBER_OF_RECIPES_INTENT } from "../Intents";
import { LilaIntentHandler } from "skill-lilasoft-toolkit";

export default class NumberOfRecipesIntentHandler extends LilaIntentHandler {   
    constructor() {
        super(NUMBER_OF_RECIPES_INTENT, NUMBER_OF_RECIPES_MESSAGES, null);
    }
};