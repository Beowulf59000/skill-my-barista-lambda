import { RecipesHelper } from "../../src/Helpers";
import { assert } from "chai";
import { RECIPE_NAMES, RECIPE_INGREDIENTS, RECIPE_STEPS } from "../../src/Data";
import { MessagesHelper } from 'skill-lilasoft-toolkit';
import { IMock, Mock, Times, It } from 'typemoq';

describe("RecipesHelper", () => {
    describe("constructor", () => {
        it("it initializes parameters", () => {
            const recipesHelper:RecipesHelper = new RecipesHelper();
            assert.isDefined(recipesHelper.messagesHelper);
        });
    });

    describe("getRandomRecipe", () => {
        const messagesHelperMock: IMock<MessagesHelper> = Mock.ofType<MessagesHelper>();
        const recipesHelper:RecipesHelper = new RecipesHelper(messagesHelperMock.object);
        recipesHelper.getRandomRecipe();
        messagesHelperMock.verify(x => x.getRandomMessage(It.isValue(Object.keys(RECIPE_NAMES))), Times.once());
    });

    describe("getRecipe", () => {
        it("it should returns filled recipe", () => {
            const recipesHelper:RecipesHelper = new RecipesHelper();
            const recipeName = "expresso";
            const recipe = recipesHelper.getRecipe(recipeName);
            assert.equal(recipe.name, RECIPE_NAMES[recipeName]);
            assert.equal(recipe.ingredients, RECIPE_INGREDIENTS[recipeName]);
            assert.equal(recipe.steps, RECIPE_STEPS[recipeName]);
        });
    });
});