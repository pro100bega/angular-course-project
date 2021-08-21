import { NgModule } from "@angular/core";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipesComponent } from "./recipes.component";
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { BrowserModule } from "@angular/platform-browser";
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';

@NgModule({
    declarations: [
        RecipeListComponent,
        RecipeDetailComponent,
        RecipesComponent,
        RecipeItemComponent,
        RecipeEditComponent
    ],
    imports: [
        BrowserModule,
        SharedModule,
        RouterModule
    ],
    exports: [
        RecipesComponent
    ]
})
export class RecipeModule {}