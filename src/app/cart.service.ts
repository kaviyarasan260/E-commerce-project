import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartlist:any=[]
  public productlist=new BehaviorSubject<any>([]);
  constructor() { }
  getproduct()
  {
    return this.productlist.asObservable();
  }
  setproduct(product:any)
  {
    this.cartlist.pus(...product);
    this.productlist.next(product);
  }
  addtocart(product :any)
  {
    this.cartlist.push(product);
    this.productlist.next(this.cartlist);
    this.gettot();
    console.log(this.cartlist);
    
  }
  gettot():number
  {
    let grandtot=0;
    this.cartlist.map((a:any)=>
    {
      grandtot+=parseInt(a.total);
    })
    return grandtot;
  }
  remove(product:any)
  {
    this.cartlist.map((a:any,index:any)=>
    {
      if(product.id===a.id)
      {
        this.cartlist.splice(index,1);
      }
    })
    this.productlist.next(this.cartlist);
  }
  removeall()
  {
    this.cartlist=[];
    this.productlist.next(this.cartlist);
  }
}
