import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "src/app/shared/ingredient.model";

@Injectable({
    providedIn: 'root'
})
export class ShoppingListService {
    ingredientAdded: Subject<Ingredient> = new Subject<Ingredient>();

    private ingredients: Ingredient[] = [
        new Ingredient("Apples", 2), 
        new Ingredient("Tomato", 1)
    ];

    getIngredients(): Ingredient[] {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient): void {
        this.ingredients.push(ingredient);
        this.ingredientAdded.next(ingredient);
    }

    addIngredients(ingredients: Ingredient[]): void {
        this.ingredients.push(...ingredients);
    }
}