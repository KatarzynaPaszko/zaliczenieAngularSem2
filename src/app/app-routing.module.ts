import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ContactComponent } from './contact/contact.component';
import { BasketComponent } from './basket/basket.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'productsList'},
  { path: 'products', component: ProductsListComponent},
  { path: 'product/:id', component: ProductDetailsComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'basket', component: BasketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
