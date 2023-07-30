import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterOutcomeFormComponent } from './register-outcome-form.component';

describe('RegisterOutcomeFormComponent', () => {
  let component: RegisterOutcomeFormComponent;
  let fixture: ComponentFixture<RegisterOutcomeFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterOutcomeFormComponent]
    });
    fixture = TestBed.createComponent(RegisterOutcomeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
