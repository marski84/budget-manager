import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RegisterOutcomeFormComponent} from './register-outcome-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "../../../material/material.module";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";

describe('RegisterOutcomeFormComponent', () => {
  let component: RegisterOutcomeFormComponent;
  let fixture: ComponentFixture<RegisterOutcomeFormComponent>;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterOutcomeFormComponent],
      imports: [ReactiveFormsModule, MaterialModule, NoopAnimationsModule]
    });
    fixture = TestBed.createComponent(RegisterOutcomeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    jest.clearAllMocks();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should form call handleSubmit on submit', () => {
    //   given
    const formSpy = jest.spyOn(component, 'handleSubmit');
    //   when
    component.handleSubmit();
    //   expect
    expect(formSpy).toHaveBeenCalled()
  });

  it('should not call emit after submit when form invalid', () => {
    //   given
    const formEmitterSpy = jest.spyOn(component.formDataEmitted, 'emit');
    //   when
    component.handleSubmit();
    //   expect
    expect(formEmitterSpy).not.toHaveBeenCalled();
  });

  it('should call emit after submit when form valid', () => {
    //   given
    component.form.controls['month'].setValue('January');
    component.form.controls['expenseAmount'].setValue(100);
    component.form.controls['outcomeType'].setValue('test');
    const formEmitterSpy = jest.spyOn(component.formDataEmitted, 'emit');
    //   when
    component.handleSubmit();
    //   expect
    expect(formEmitterSpy).toHaveBeenCalledWith(
      {
        month: "January",
        expenseAmount: 100,
        outcomeType: "test"
      }
    );
  });

  it('should call reactToMonthChange when input provided', () => {
    // given
    const spy = jest.spyOn(component.form, 'reactToMonthChange')
    component.selectedMonth = 'January';
    // when
    component.ngOnInit()
    //   then
    expect(spy).toHaveBeenCalledWith('January');
  })
});






