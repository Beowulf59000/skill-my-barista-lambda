"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Recipe_1 = require("../../src/Models/Recipe");
const chai_1 = require("chai");
describe("Recipe", () => {
    describe("constructor", () => {
        it("it should have property name", () => {
            const recipe = new Recipe_1.default();
            chai_1.expect(recipe).to.have.property("name");
        });
        it("it should have property ingredients", () => {
            const recipe = new Recipe_1.default();
            chai_1.expect(recipe).to.have.property("ingredients");
        });
        it("it should have property steps", () => {
            const recipe = new Recipe_1.default();
            chai_1.expect(recipe).to.have.property("steps");
        });
        it("it should fill property name", () => {
            const recipe = new Recipe_1.default("recette");
            chai_1.assert.equal(recipe.name, "recette");
        });
        it("it should fill property ingredients", () => {
            const recipe = new Recipe_1.default("recette", "eau");
            chai_1.assert.deepEqual(recipe.ingredients, "eau");
        });
        it("it should fill property stepss", () => {
            const recipe = new Recipe_1.default("recette", "eau", "étape");
            chai_1.assert.equal(recipe.steps, "étape");
        });
    });
});
//# sourceMappingURL=Recipe.spec.js.map