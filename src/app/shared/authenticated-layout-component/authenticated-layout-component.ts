import { Component } from '@angular/core';
import {NavBarComponent} from "../../features/navBar/navbar-component/nav-bar-component/nav-bar-component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-authenticated-layout-component',
    imports: [
        NavBarComponent,
        RouterOutlet
    ],
  templateUrl: './authenticated-layout-component.html',
  styleUrl: './authenticated-layout-component.css',
})
export class AuthenticatedLayoutComponent {}
