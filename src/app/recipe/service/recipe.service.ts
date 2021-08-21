import { Injectable } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";
import { ShoppingListService } from "src/app/shopping-list/service/shopping-list.service";
import { Recipe } from "../recipe.model";

@Injectable({
    providedIn: 'root'
})
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe(
            0,
            'Test', 
            'Tasty berries', 
            'https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_1280.jpg',
            [ new Ingredient('Berrie', 1) ]   
        ),
        new Recipe(
            1,
            "Super salad", 
            "Tasty salad", 
            "https://www.acouplecooks.com/wp-content/uploads/2020/02/Mexican-Salad-005.jpg",
            [ new Ingredient('Salad mixture', 1), new Ingredient('Sauce', 1) ]
        )
    ];

    constructor(private shoppingListService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipeById(id: number): Recipe {
        return this.recipes.find((recipe) => recipe.id === id);
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}