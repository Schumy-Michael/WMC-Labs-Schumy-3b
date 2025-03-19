import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() {
    this.cart = this.getCart();
  }

  private cart:any = [];

  private storageKey:string = environment.storage_key;

  getCart() {
    return sessionStorage.getItem(this.storageKey) ? JSON.parse(String(sessionStorage.getItem(this.storageKey))) : [];
  }

  addToCart(product:any) {
    let index = this.cart.findIndex((p:any) => p.id == product.id); // Ist das Item schon im cart
    if(index == -1) {
      // Wenn ja, item mit Menge 1 zum cart hinzufügen
      let temp:any = {}
      Object.assign(temp, product);
      temp['quantity'] = 1;
      this.cart.push(temp);
    }else {
      // Wenn nein, item Menge um 1 erhöhen
      this.cart[index].quantity += 1;
    }
    sessionStorage.setItem(this.storageKey, JSON.stringify(this.cart));
}

removeFromCart(product:any) {
  let index = this.cart.findIndex((p:any) => p.id == product.id);
  if(index != -1) { // Extra check ob das item wirklich im cart ist, sodass keine negativen Mengen enstehen.
    this.cart[index].quantity -= 1;
    if(this.cart[index].quantity == 0) {
      this.cart.splice(index, 1);
    }
    sessionStorage.setItem(this.storageKey, JSON.stringify(this.cart)); // Update Cart
  }
}

}
