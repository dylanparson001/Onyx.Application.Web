import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavBarComponent} from './features/navBar/navbar-component/nav-bar-component/nav-bar-component';
import {NavManager} from './core/managers/nav-manager';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('onyx-application-web');

  constructor() {
    let token = localStorage.getItem('token');
    if (token === null || token === '') {

      let navBar = document.getElementsByClassName('navbar');
      navBar.item(0)?.classList.add('hidden')
      console.log(navBar);
    }
  }


}
