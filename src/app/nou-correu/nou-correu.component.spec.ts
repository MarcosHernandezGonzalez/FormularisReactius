import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouCorreuComponent } from './nou-correu.component';

describe('NouCorreuComponent', () => {
  let component: NouCorreuComponent;
  let fixture: ComponentFixture<NouCorreuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NouCorreuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouCorreuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
