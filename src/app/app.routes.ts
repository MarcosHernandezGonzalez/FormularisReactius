import { Routes } from '@angular/router';
import {NouCorreuComponent} from './nou-correu/nou-correu.component';
import {LlistaCorreusComponent} from './llista-correus/llista-correus.component';

export const routes: Routes = [
  { path: '', component: LlistaCorreusComponent },
  { path: 'nou-correu', component: NouCorreuComponent },

];
