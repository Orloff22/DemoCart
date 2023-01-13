import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './Components/cart/cart.component';
import { HeaderComponent } from './Components/header/header.component';
import { ProductsComponent } from './Components/products/products.component';
import { FormComponent } from './Components/form/form.component';
const routes: Routes = [
  {path: 'header-component', component:HeaderComponent},
  {path: 'products-component', component:ProductsComponent},
  {path: 'cart-component', component:CartComponent},
  {path: 'form-component', component:FormComponent},
  { path: '',   redirectTo: '/header-component', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HeaderComponent,ProductsComponent,CartComponent,FormComponent];
