import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-mostrar-correu',
  templateUrl: './mostrar-correu.component.html',
})
export class MostrarCorreuComponent {
  @Input() cos: string = '';
}
