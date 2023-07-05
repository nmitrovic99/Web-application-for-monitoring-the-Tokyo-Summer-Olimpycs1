import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizatorZahteviComponent } from './organizator-zahtevi.component';

describe('OrganizatorZahteviComponent', () => {
  let component: OrganizatorZahteviComponent;
  let fixture: ComponentFixture<OrganizatorZahteviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizatorZahteviComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizatorZahteviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
