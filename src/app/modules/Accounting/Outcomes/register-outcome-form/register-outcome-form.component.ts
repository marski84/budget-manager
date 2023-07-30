import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AccountingService} from "@app/modules/Accounting/accounting.service";
import {ExpenseFormInterface} from "@app/modules/Accounting/models/Expense-form.interface";

@Component({
  selector: 'app-register-outcome-form',
  templateUrl: './register-outcome-form.component.html',
  styleUrls: ['./register-outcome-form.component.css']
})
export class RegisterOutcomeFormComponent {
  // FormGroup<ExpenseFormInterface>
  form = this.fb.group({
    month: ['', [Validators.required]],
    outcomeType: ['', [Validators.required]],
    expenseAmount: ['', [Validators.required]]
  })

  constructor(private fb: FormBuilder, private accountingService: AccountingService) {
  }

  hanleSubmit(form: FormGroup<ExpenseFormInterface>) {

  }

}
