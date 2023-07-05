import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PocetnaUcesniciComponent } from './pocetna-ucesnici.component';

describe('PocetnaUcesniciComponent', () => {
  let component: PocetnaUcesniciComponent;
  let fixture: ComponentFixture<PocetnaUcesniciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PocetnaUcesniciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PocetnaUcesniciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
