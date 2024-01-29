import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public totitem:number=0;
  constructor(private cart:CartService){}
  ngOnInit():void {
    this.cart.getproduct().subscribe(res=>
      {
        this.totitem=res.length;
      })
  }
}
