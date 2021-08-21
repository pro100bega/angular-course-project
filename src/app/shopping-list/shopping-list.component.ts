import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "./service/shopping-list.service";

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
    ingredients: Ingredient[] = [
        new Ingredient("Apples", 2), new Ingredient("Tomato", 1)
    ];
    ingredientAddedSub: Subscription;

    constructor(private shoppingListService: ShoppingListService) {}

    ngOnInit() {
        this.fetchIngredients();
        this.ingredientAddedSub = this.shoppingListService.ingredientAdded
            .subscribe(() => this.fetchIngredients());
    }

    ngOnDestroy() {
        this.ingredientAddedSub.unsubscribe();
    }

    private fetchIngredients() {
        this.ingredients = this.shoppingListService.getIngredients();
    }
}