import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {newOutcome} from "../../../Accounting/models/outcomesData.interface";
import {MONTHS} from "../months.enum";
import {RegisterOutcomeForm} from './register-outcome-form';

@Component({
  selector: 'app-register-outcome-form',
  templateUrl: './register-outcome-form.component.html',
  styleUrls: ['./register-outcome-form.component.css']
})
export class RegisterOutcomeFormComponent implements OnInit {
  @Output() formDataEmitted: EventEmitter<newOutcome> = new EventEmitter()
  @Input() selectedMonth?: string

  months = MONTHS;
  form: RegisterOutcomeForm = RegisterOutcomeForm.create();

  constructor(
    // private fb: NonNullableFormBuilder,
    // private accountingService: AccountingService
  ) {
  }

  get monthCtrl() {
    return this.form.controls['month'] as FormControl
  }

  get expenseAmountCtrl() {
    return this.form.controls['expenseAmount'] as FormControl
  }

  get outcomeTypeCtrl() {
    return this.form.controls['outcomeType'] as FormControl
  }

  ngOnInit(): void {
    if (!this.selectedMonth) {
      return;
    }
    this.form.reactToMonthChange(this.selectedMonth);
  }

  handleSubmit() {
    if (!this.form.valid) {
      return
    }

    this.formDataEmitted.emit(this.form.getRawValue());
    this.outcomeTypeCtrl.setValue('');
    this.expenseAmountCtrl.setValue('');
    this.form.markAsPristine();
  }
}
