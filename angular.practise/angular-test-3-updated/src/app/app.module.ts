/** @format */

import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { ProductAddComponent } from "./product/product-add/product-add.component";
import { ProductListComponent } from "./product/product-add/product-list/product-list.component";
import { ProductSoldComponent } from "./product/product-add/product-list/product-sold/product-sold.component";

@NgModule({
  declarations: [
    AppComponent,
    ProductAddComponent,
    ProductListComponent,
    ProductSoldComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
