import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VodjaDelegacijaComponent } from './vodja-delegacija.component';

describe('VodjaDelegacijaComponent', () => {
  let component: VodjaDelegacijaComponent;
  let fixture: ComponentFixture<VodjaDelegacijaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VodjaDelegacijaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VodjaDelegacijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
