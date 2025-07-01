import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './header/header';
import {TopHeader} from './top-header/top-header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, TopHeader],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'crs';
}
