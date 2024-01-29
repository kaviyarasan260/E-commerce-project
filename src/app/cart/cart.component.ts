import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
public product:any=[];
public grand!:number;
constructor(private cart:CartService){}
ngOnInit():void{
  this.cart.getproduct().subscribe(res=>
    {
      this.product=res;
      this.grand=this.cart.gettot();
    })
}
remove(item:any)
{
  this.cart.remove(item);
}
empty()
{
  this.cart.removeall();
}
}
