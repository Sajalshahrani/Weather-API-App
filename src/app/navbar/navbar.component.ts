import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router) {}


  searchCity(city: string): void {
    if (city) {
      this.router.navigate(['/weather', city]); 
    }
  }
  
  
}
