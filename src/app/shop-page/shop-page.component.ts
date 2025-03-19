import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-shop-page',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './shop-page.component.html',
  styleUrl: './shop-page.component.css'
})
export class ShopPageComponent implements OnInit {


  public products:any = null;

  constructor(private productService:ProductService, private cartService:CartService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((response) => {
      this.products = response;
    });
  }

  eventFired(product: any) {
    console.log("eventFired: " + product)
    this.addToCart(product);
  }

  addToCart(product:any) {
    this.cartService.addToCart(product);
  }

  
}
