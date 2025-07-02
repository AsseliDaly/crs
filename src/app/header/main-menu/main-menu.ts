import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-main-menu',
  imports: [
    NgForOf
  ],
  templateUrl: './main-menu.html',
  styleUrl: './main-menu.css'
})
export class MainMenu {
  mainMenuItems:string[] = ["Home", "Products", "About", "Contact"];
}
