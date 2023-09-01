import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup, NonNullableFormBuilder, Validators} from "@angular/forms";
import {AccountingService} from "@app/modules/Accounting/accounting.service";
import {newOutcome} from "@app/modules/Accounting/models/outcomesData.interface";
import {MONTHS} from "@app/modules/Accounting/Outcomes/months.enum";
import {ExpenseFormInterface} from "@app/modules/Accounting/models/ExpenseFormInterface";

@Component({
  selector: 'app-register-outcome-form',
  templateUrl: './register-outcome-form.component.html',
  styleUrls: ['./register-outcome-form.component.css']
})
export class RegisterOutcomeFormComponent implements OnInit {
  @Output() formDataEmitted: EventEmitter<newOutcome> = new EventEmitter()
  @Input() selectedMonth?: string

  months = MONTHS
  form: FormGroup<ExpenseFormInterface> = this.fb.group({
    month: ['', [Validators.required]],
    outcomeType: ['', [Validators.required]],
    expenseAmount: ['', [Validators.required]]
  })

  constructor(private fb: NonNullableFormBuilder, private accountingService: AccountingService) {
  }

  ngOnInit(): void {
    if (this.selectedMonth) {
      this.form.controls.month.setValue(this.selectedMonth);
      this.form.controls.month.disable();
    }
  }

  handleSubmit() {
    if (this.form.invalid) {
      return
    }

    this.formDataEmitted.emit(this.form.getRawValue() as newOutcome);
    this.form.controls.outcomeType.setValue('')
    this.form.controls.expenseAmount.setValue('')
    this.form.markAsPristine()
  }
}
