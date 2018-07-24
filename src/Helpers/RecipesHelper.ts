import { RECIPE_NAMES, RECIPE_INGREDIENTS, RECIPE_STEPS } from '../Data';
import Recipe from '../Models/Recipe';
import { MessagesHelper } from 'skill-lilasoft-toolkit';

export default class RecipesHelper {
    messagesHelper: MessagesHelper;

    constructor(messagesHelper?: MessagesHelper) {
        this.messagesHelper = (messagesHelper !== undefined) ? messagesHelper : new MessagesHelper();
    }

    public getRandomRecipe(): Recipe {
        const recipeName = this.messagesHelper.getRandomMessage(Object.keys(RECIPE_NAMES));
        return this.getRecipe(recipeName);
    };
    public getRecipe(recipeName: string): Recipe {
        return new Recipe(RECIPE_NAMES[recipeName], RECIPE_INGREDIENTS[recipeName], RECIPE_STEPS[recipeName]);
    };
};