import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  imports: [

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
getDisscountPrice(){
    return this.product.price - (this.product.price * this.product.discount /100);
}


  decrementCartValue() {
    if (this.addToCard>0){this.addToCard--;}

  }

  incrementCartValue() {
    if(this.addToCard<this.product.inStock){this.addToCard++;}
  }
}
