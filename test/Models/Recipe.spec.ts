import Recipe from "../../src/Models/Recipe";
import { expect, assert } from "chai";

describe("Recipe", () => {
    describe("constructor", () => {
        it("it should have property name", () => {
            const recipe:Recipe = new Recipe();
            expect(recipe).to.have.property("name");          
        });
        it("it should have property ingredients", () => {
            const recipe:Recipe = new Recipe();
            expect(recipe).to.have.property("ingredients");
        });
        it("it should have property steps", () => {
            const recipe:Recipe = new Recipe();
            expect(recipe).to.have.property("steps");
        });

        it("it should fill property name", () => {
            const recipe:Recipe = new Recipe("recette");
            assert.equal(recipe.name, "recette");
        });

        it("it should fill property ingredients", () => {
            const recipe:Recipe = new Recipe("recette", "eau");
            assert.deepEqual(recipe.ingredients, "eau");
        });

        it("it should fill property stepss", () => {
            const recipe:Recipe = new Recipe("recette", "eau", "étape");
            assert.equal(recipe.steps, "étape");
        });
    });
});