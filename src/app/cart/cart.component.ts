import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  constructor(private cartService:CartService){
    this.cartItems = this.getCart();
  }

  public cartItems:any = [];

  getCart() {
    return this.cartService.getCart();
  }

  removeProduct(product:any) {
    this.cartService.removeFromCart(product); // Remove Item
    this.cartItems = this.getCart(); // Update Cart
  }

  getPrice() {
    let total = 0;
    this.cartItems.forEach((item:any) => {
      total += item.price * item.quantity;
    });
    return total;
  }



}
