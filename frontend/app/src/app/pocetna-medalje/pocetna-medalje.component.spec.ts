import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PocetnaMedaljeComponent } from './pocetna-medalje.component';

describe('PocetnaMedaljeComponent', () => {
  let component: PocetnaMedaljeComponent;
  let fixture: ComponentFixture<PocetnaMedaljeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PocetnaMedaljeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PocetnaMedaljeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
