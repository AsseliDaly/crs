import { Component } from '@angular/core';
import {TopMenu} from './top-menu/top-menu';
import {MainMenu} from './main-menu/main-menu';
import {SearchBar} from './search-bar/search-bar';

@Component({
  selector: 'app-header',
  imports: [
    TopMenu,
    MainMenu,
    SearchBar
  ],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

}
