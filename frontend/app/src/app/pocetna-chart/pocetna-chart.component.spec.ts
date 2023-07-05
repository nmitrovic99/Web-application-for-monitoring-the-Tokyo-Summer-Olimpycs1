import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PocetnaChartComponent } from './pocetna-chart.component';

describe('PocetnaChartComponent', () => {
  let component: PocetnaChartComponent;
  let fixture: ComponentFixture<PocetnaChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PocetnaChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PocetnaChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
