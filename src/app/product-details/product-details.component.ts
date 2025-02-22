import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../cataloge/product.model';
import { CartComponent } from "../cart/cart.component";

@Component({
  selector: 'bot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  imports: [CartComponent]
})
export class ProductDetailsComponent {
  @Input() product!:IProduct;
  @Output() buy=new EventEmitter();
  getImageUrl(product: IProduct) {
    if(!product) {
      return '';
    }
    return '/assets/images/robot-parts/' + product.imageName;
  }
  buyButtonClicked(product:IProduct) {
    this.buy.emit();
  }
}
