import { Injectable } from '@angular/core';
import { IProduct } from './cataloge/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root' //this service is available anywhere in angular app
})
export class CartService {
  cart:IProduct[]=[];
  constructor(private http:HttpClient) { }
  add(product:IProduct) {
    this.cart.push(product);
    this.http.post('api/cart',this.cart).subscribe({
      next: (data) => {
          console.log(`Product ${product.name} added to cart`);
      },
      error: (err) => {
        console.log(err);
      }
    });  
  }
}
