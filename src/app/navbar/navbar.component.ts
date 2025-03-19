import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private cart:CartService, private router: Router){
    // Wechselt die Anzeige der aktiven Seite in der Navbar aufgrund der Router URL
    switch (this.router.url) {
      case "/shop":
        document.getElementById("shop")?.classList.add("active");
        break;
      case "/":
      case "/home":
      default:
        document.getElementById("home")?.classList.add("active");
        break;
    }
  }


  getItemCount() {
    return this.cart.getCart().map((item:any) => item.quantity).reduce((a:any, b:any) => a + b, 0);
  }

  hasItems() {
    return this.getItemCount() > 0;
  }
}
