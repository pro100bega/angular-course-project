import { NgModule } from "@angular/core";
import { ShoppingListEditComponent } from "./shopping-list-edit/shopping-list-edit.component";
import { ShoppingListComponent } from "./shopping-list.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingListEditComponent,
    ],
    imports: [
        BrowserModule
    ],
    exports: [
        ShoppingListComponent
    ]
})
export class ShoppingListModule {}