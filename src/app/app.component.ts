import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NouCorreuComponent} from './nou-correu/nou-correu.component';
import {LlistaCorreusComponent} from './llista-correus/llista-correus.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NouCorreuComponent, LlistaCorreusComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FormularisReactius2';
}
