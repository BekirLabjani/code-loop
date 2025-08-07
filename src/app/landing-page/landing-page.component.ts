import { Component } from '@angular/core';
import { NavBarComponent } from '../shared/nav-bar/nav-bar.component';
import { MainComponent } from "./main/main.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NavBarComponent, MainComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
