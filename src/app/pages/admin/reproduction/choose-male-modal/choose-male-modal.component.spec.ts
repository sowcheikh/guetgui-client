import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseMaleModalComponent } from './choose-male-modal.component';

describe('ChooseMaleModalComponent', () => {
  let component: ChooseMaleModalComponent;
  let fixture: ComponentFixture<ChooseMaleModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseMaleModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChooseMaleModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
