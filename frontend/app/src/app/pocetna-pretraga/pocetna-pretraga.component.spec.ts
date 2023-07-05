import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PocetnaPretragaComponent } from './pocetna-pretraga.component';

describe('PocetnaPretragaComponent', () => {
  let component: PocetnaPretragaComponent;
  let fixture: ComponentFixture<PocetnaPretragaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PocetnaPretragaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PocetnaPretragaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
