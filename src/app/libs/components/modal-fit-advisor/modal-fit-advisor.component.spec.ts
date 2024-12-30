import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFitAdvisorComponent } from './modal-fit-advisor.component';

describe('ModalFitAdvisorComponent', () => {
  let component: ModalFitAdvisorComponent;
  let fixture: ComponentFixture<ModalFitAdvisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalFitAdvisorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalFitAdvisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
