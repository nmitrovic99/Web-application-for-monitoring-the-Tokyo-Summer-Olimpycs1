import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizatorRekordComponent } from './organizator-rekord.component';

describe('OrganizatorRekordComponent', () => {
  let component: OrganizatorRekordComponent;
  let fixture: ComponentFixture<OrganizatorRekordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizatorRekordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizatorRekordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
