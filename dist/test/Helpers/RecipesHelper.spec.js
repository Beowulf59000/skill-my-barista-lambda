"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Helpers_1 = require("../../src/Helpers");
const chai_1 = require("chai");
const Data_1 = require("../../src/Data");
const typemoq_1 = require("typemoq");
describe("RecipesHelper", () => {
    describe("constructor", () => {
        it("it initializes parameters", () => {
            const recipesHelper = new Helpers_1.RecipesHelper();
            chai_1.assert.isDefined(recipesHelper.messagesHelper);
        });
    });
    describe("getRandomRecipe", () => {
        const messagesHelperMock = typemoq_1.Mock.ofType();
        const recipesHelper = new Helpers_1.RecipesHelper(messagesHelperMock.object);
        recipesHelper.getRandomRecipe();
        messagesHelperMock.verify(x => x.getRandomMessage(typemoq_1.It.isValue(Object.keys(Data_1.RECIPE_NAMES))), typemoq_1.Times.once());
    });
    describe("getRecipe", () => {
        it("it should returns filled recipe", () => {
            const recipesHelper = new Helpers_1.RecipesHelper();
            const recipeName = "expresso";
            const recipe = recipesHelper.getRecipe(recipeName);
            chai_1.assert.equal(recipe.name, Data_1.RECIPE_NAMES[recipeName]);
            chai_1.assert.equal(recipe.ingredients, Data_1.RECIPE_INGREDIENTS[recipeName]);
            chai_1.assert.equal(recipe.steps, Data_1.RECIPE_STEPS[recipeName]);
        });
    });
});
//# sourceMappingURL=RecipesHelper.spec.js.map