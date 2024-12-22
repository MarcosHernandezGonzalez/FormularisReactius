import {Component, Input, OnInit} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {NouCorreuComponent} from '../nou-correu/nou-correu.component';

@Component({
  selector: 'app-llistacorreus',
  templateUrl: './llista-correus.component.html',
  imports: [
    NgIf,
    NgForOf,
    NouCorreuComponent
  ],
  styleUrls: ['./llista-correus.component.css']
})
export class LlistaCorreusComponent implements OnInit {


  correus: any[] = [];

  constructor() {
    const correus1 = { destinatari: 'marcos@gmail.com', titol: 'Titol del 1', respondre: false, enviat: false };
    const correus2 = { destinatari: 'paco@gmail.com', titol: 'Titol del 2', respondre: false, enviat: false};

    this.correus.push(correus1);
    this.correus.push(correus2);
  }

  clickRespondre(correu: any) {
    correu.respondre = true;
  }

  ngOnInit(): void {
  }

  correuEnviat(correu: any) {
    correu.enviat = true;
    correu.respondre = false;
    console.log(this.correus[0].enviat);
  }
}
