import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuivisMedicalComponent } from './suivis-medical.component';

describe('SuivisMedicalComponent', () => {
  let component: SuivisMedicalComponent;
  let fixture: ComponentFixture<SuivisMedicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuivisMedicalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuivisMedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
