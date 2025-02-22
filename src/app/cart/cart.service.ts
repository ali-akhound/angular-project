import { Injectable } from '@angular/core';
import { IProduct } from '../cataloge/product.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' //this service is available anywhere in angular app
})
export class CartService {
  private cart: BehaviorSubject<IProduct[]> = new BehaviorSubject<IProduct[]>([]);
  constructor(private http: HttpClient) {
    this.http.get<IProduct[]>("api/cart").subscribe({
      next: (cart) => this.cart.next(cart),
    });
  }
  getCart():Observable<IProduct[]> {
    return this.cart.asObservable();
  }
  add(product: IProduct) {
    const newCart = [...this.cart.getValue(), product];
    this.cart.next(newCart);
    this.http.post('api/cart', this.cart).subscribe({
      next: (data) => {
        console.log(`Product ${product.name} added to cart`);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
  remove(product: IProduct) {
    let newCart = this.cart.getValue().filter((i) => i !== product);
    this.cart.next(newCart);
    this.http.post('api/cart', newCart).subscribe({
      next: () => {
        console.log('removed ' + product.name + ' from cart!');
      }
    });
  }
}
