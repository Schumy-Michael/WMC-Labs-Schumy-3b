import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ShopPageComponent } from '../shop-page/shop-page.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
    @Input() product:any

    @Output("addToCart") addToCart: EventEmitter<any> = new EventEmitter();

    ToCart() {
      this.addToCart.emit(this.product);
      console.log("ToCart triggered")
    }
}
