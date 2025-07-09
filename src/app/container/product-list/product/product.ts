import {Component, Input, input} from '@angular/core';
import {DecimalPipe, NgStyle} from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [
    DecimalPipe,
    NgStyle
  ],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {
  @Input()
  prod: {
    id: number;
    name: string;
    description: string;
    brand: string;
    gender: string;
    category: string;
    size: number[];
    color: string[];
    price: number;
    discountPrice?: number;
    is_in_inventory: boolean;
    items_left: number;
    imageURL: string;
    slug: string;
  } = undefined ;
}
