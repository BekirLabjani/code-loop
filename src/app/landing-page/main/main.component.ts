import { Component } from '@angular/core';
import { ShowRoomComponent } from '../show-room/show-room.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ShowRoomComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
