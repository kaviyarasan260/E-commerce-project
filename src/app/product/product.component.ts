import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  listdata:any[]=[];
  image:string="";
  name:string="";
  price:string="";
  rating:string="";
  constructor(private http:HttpClient,private cart:CartService){
    this.view();
  }
  view()
  {
    this.http.get("http://localhost:3000/view").subscribe((resultData:any)=>
    {
      console.log(resultData);
      this.listdata=resultData.data;
      this.listdata.forEach((a:any)=>
      {
         Object.assign(a,{quantity:1,total:a.price});
      })
      })
  }
  addtocart(item:any)
  {
    this.cart.addtocart(item);
  }
}
