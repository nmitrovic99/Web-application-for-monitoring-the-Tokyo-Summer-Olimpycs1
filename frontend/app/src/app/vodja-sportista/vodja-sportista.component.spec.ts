import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VodjaSportistaComponent } from './vodja-sportista.component';

describe('VodjaSportistaComponent', () => {
  let component: VodjaSportistaComponent;
  let fixture: ComponentFixture<VodjaSportistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VodjaSportistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VodjaSportistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
