import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { GamesComponent } from './games/games.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: "app-create-account",
    component: CreateAccountComponent
  },
  {
    path: "app-login",
    component: LoginComponent
  },
  {
    path: "app-cart",
    component: CartComponent
  },
  {
    path: "",
    component: GamesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
