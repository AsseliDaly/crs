import { Component } from '@angular/core';
import {Search} from './search/search';
import {NgForOf} from '@angular/common';
import {ProductList} from './product-list/product-list';

@Component({
  selector: 'app-container',
  imports: [
    Search,
    ProductList,
  ],
  templateUrl: './container.html',
  styleUrl: './container.css'
})
export class Container {
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
