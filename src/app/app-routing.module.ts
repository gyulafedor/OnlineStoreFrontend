import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGameComponent } from './add-game/add-game.component';
import { CartComponent } from './cart/cart.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { GamesComponent } from './games/games.component';
import { LoginComponent } from './login/login.component';
import { SuccessfulOrderPageComponent } from './successful-order-page/successful-order-page.component';

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
  },
  {
    path: "app-successful-order-page",
    component: SuccessfulOrderPageComponent
  },
  {
    path: "app-add-game",
    component: AddGameComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
