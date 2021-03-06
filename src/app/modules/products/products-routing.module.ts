import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import {MensComponent} from "./components/mens/mens.component";
import {WomensComponent} from "./components/womens/womens.component";
import {BagsComponent} from "./components/bags/bags.component";
import {GlassesComponent} from "./components/glasses/glasses.component";
import {ProductDetailsComponent} from "./components/product-details/product-details.component";
import {UserLoginGuardGuard} from "../../guards/user-login-guard.guard";

const routes: Routes = [
  { path: '', redirectTo:'mens-products' , pathMatch:'full' },
  {path:'mens-products' , component:MensComponent},
  {path:'womens-products' , component:WomensComponent},
  {path:'bag-products' , component:BagsComponent},
  {path:'sunglass-products' , component:GlassesComponent},
  {path:'product-details/:productCode', component:ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
