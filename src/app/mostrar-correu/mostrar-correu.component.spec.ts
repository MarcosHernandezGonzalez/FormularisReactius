import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarCorreuComponent } from './mostrar-correu.component';

describe('MostrarCorreuComponent', () => {
  let component: MostrarCorreuComponent;
  let fixture: ComponentFixture<MostrarCorreuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarCorreuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarCorreuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
