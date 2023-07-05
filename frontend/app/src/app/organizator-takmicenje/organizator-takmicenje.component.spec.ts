import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizatorTakmicenjeComponent } from './organizator-takmicenje.component';

describe('OrganizatorTakmicenjeComponent', () => {
  let component: OrganizatorTakmicenjeComponent;
  let fixture: ComponentFixture<OrganizatorTakmicenjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizatorTakmicenjeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizatorTakmicenjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
