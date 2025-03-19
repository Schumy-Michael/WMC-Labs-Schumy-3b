import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path:  'shop', component:  ShopPageComponent},
    {path: 'cart',  component:  CartComponent},
];
