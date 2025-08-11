import { Component } from '@angular/core';
import { NavBarComponent } from '../shared/nav-bar/nav-bar.component';
import { MainComponent } from "./main/main.component";
import { ShowRoomComponent } from "./show-room/show-room.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NavBarComponent, MainComponent, ShowRoomComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
