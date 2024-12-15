import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  selectedRoutine: string = '';
  routinesArr: string[] = ['Routine 1', 'Routine 2', 'Routine 3', 'Routine 4', 'Routine 5'];

}
