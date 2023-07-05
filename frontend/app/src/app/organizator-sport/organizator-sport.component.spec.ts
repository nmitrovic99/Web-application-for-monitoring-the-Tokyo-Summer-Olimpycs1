import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizatorSportComponent } from './organizator-sport.component';

describe('OrganizatorSportComponent', () => {
  let component: OrganizatorSportComponent;
  let fixture: ComponentFixture<OrganizatorSportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizatorSportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizatorSportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
