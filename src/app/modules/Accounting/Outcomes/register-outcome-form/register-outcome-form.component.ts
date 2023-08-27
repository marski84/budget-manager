import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NonNullableFormBuilder, Validators} from "@angular/forms";
import {AccountingService} from "@app/modules/Accounting/accounting.service";
import {newOutcome} from "@app/modules/Accounting/models/outcomesData.interface";

@Component({
  selector: 'app-register-outcome-form',
  templateUrl: './register-outcome-form.component.html',
  styleUrls: ['./register-outcome-form.component.css']
})
export class RegisterOutcomeFormComponent implements OnInit {
  @Output() formDataEmitted: EventEmitter<newOutcome> = new EventEmitter()
  @Input() selectedMonth?: string

  // TODO: months to enum
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  // FormGroup<ExpenseFormInterface>
  form = this.fb.group({
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
