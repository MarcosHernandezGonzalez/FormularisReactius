import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlistaCorreusComponent } from './llista-correus.component';

describe('LlistaCorreusComponent', () => {
  let component: LlistaCorreusComponent;
  let fixture: ComponentFixture<LlistaCorreusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LlistaCorreusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LlistaCorreusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
