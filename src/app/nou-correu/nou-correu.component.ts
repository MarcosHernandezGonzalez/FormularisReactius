import {Component, EventEmitter, Input, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MostrarCorreuComponent} from '../mostrar-correu/mostrar-correu.component';

@Component({
  selector: 'app-nou-correu',
  templateUrl: './nou-correu.component.html',
  styleUrls: ['./nou-correu.component.css'],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MostrarCorreuComponent
  ]
})
export class NouCorreuComponent {
  correuForm: FormGroup;
  @Input() correuDestinatari: any;
  @Output() enviat = new EventEmitter();
  protected cosValue: any;


  constructor(private fb: FormBuilder) {
    this.correuForm = this.fb.group({
      destinatari: ['', [Validators.required, Validators.email]],
      assumpte: ['', Validators.required],
      cos: ['', Validators.required],
    });
    this.correuForm.get('cos')?.valueChanges.subscribe((value) => {
      this.cosValue = value;
    });
  }
  ngOnInit(): void {
    if (this.correuDestinatari !== undefined) {
      this.correuForm.patchValue({
        destinatari: this.correuDestinatari,
      });
    }
  }



  enviarCorreu() {
    console.log(this.correuForm.value);
    this.enviat.emit();
  }

  get destinatari() {
    return this.correuForm.get('destinatari');
  }

  esHotmail(): boolean {
    const destinatari = this.correuForm.get('destinatari')?.value;
    return destinatari.endsWith('@hotmail.com');
  }

}
