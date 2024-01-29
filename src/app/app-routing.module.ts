import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { ChekoutComponent } from './chekout/chekout.component';

const routes: Routes = [
  {path:'',component:ProductComponent},
  {path:'cart',component:CartComponent},
  {path:'check',component:ChekoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
