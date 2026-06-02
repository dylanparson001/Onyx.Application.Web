import {Component, inject, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {NavigationPaths} from '../../../../shared/enums/navigation-paths';
import {NavManager} from '../../../../core/managers/nav-manager';

@Component({
  selector: 'app-nav-bar-component',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './nav-bar-component.html',
  styleUrl: './nav-bar-component.css',
})
export class NavBarComponent implements OnInit {
  OnyxRoutes = NavigationPaths;
  private navManager = inject(NavManager);

  ngOnInit(): void {
  }

  protected async logoutUser() {
    localStorage.clear();
    await this.navManager.navigateTo(NavigationPaths.Login)
    let navBar = document.getElementsByClassName('navbar');

    navBar.item(0)?.classList.add('hidden');
  }


}
