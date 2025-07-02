import { Component } from '@angular/core';
import {Search} from './search/search';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [
    Search,
    NgForOf,
  ],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  addToCard :number =0;
  product={
    image:"/images/iphone.png",
    name : "iPhone",
    price : 789,
    color :   "Red",
    discount: 8.9,
    inStock :5
  }
// getDisscountPrice(){
//     return this.product.price - (this.product.price * this.product.discount /100);
// }


//   decrementCartValue() {
//     if (this.addToCard>0){this.addToCard--;}
//
//   }
//
//   incrementCartValue() {
//     if(this.addToCard<this.product.inStock){this.addToCard++;}
//   }
 }
