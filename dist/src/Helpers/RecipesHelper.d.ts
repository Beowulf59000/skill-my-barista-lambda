import Recipe from '../Models/Recipe';
import { MessagesHelper } from 'skill-lilasoft-toolkit';
export default class RecipesHelper {
    messagesHelper: MessagesHelper;
    constructor(messagesHelper?: MessagesHelper);
    getRandomRecipe(): Recipe;
    getRecipe(recipeName: string): Recipe;
}
