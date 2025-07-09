import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgClass, NgIf} from '@angular/common';



@Component({
  selector: 'app-search',
  imports: [
    FormsModule,
    NgClass,

  ],
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {
  searchText:string="";


}
