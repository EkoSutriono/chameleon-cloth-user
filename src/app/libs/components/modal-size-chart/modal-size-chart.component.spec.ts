import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSizeChartComponent } from './modal-size-chart.component';

describe('ModalSizeChartComponent', () => {
  let component: ModalSizeChartComponent;
  let fixture: ComponentFixture<ModalSizeChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalSizeChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalSizeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
