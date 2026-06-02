import {Router} from '@angular/router';
import {inject, Injectable} from '@angular/core';
import {NavigationPaths} from '../../shared/enums/navigation-paths';

@Injectable({providedIn: 'root'})
export class NavManager {
  private router = inject(Router);

  async navigateTo(path: NavigationPaths) {
    try {
      console.log(path);
      await this.router.navigate([path]);
    } catch (ex) {
      console.log(`Navigating to ${path} error: ${ex}`);
    }
  }

}
