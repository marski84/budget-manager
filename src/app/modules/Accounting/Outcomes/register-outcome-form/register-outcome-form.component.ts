import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AccountingService} from "@app/modules/Accounting/accounting.service";

@Component({
  selector: 'app-register-outcome-form',
  templateUrl: './register-outcome-form.component.html',
  styleUrls: ['./register-outcome-form.component.css']
})
export class RegisterOutcomeFormComponent {

  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  // FormGroup<ExpenseFormInterface>
  form = this.fb.group({
    month: ['', [Validators.required]],
    outcomeType: ['', [Validators.required]],
    expenseAmount: ['', [Validators.required]]
  })

  constructor(private fb: FormBuilder, private accountingService: AccountingService) {
  }

  hanleSubmit() {
    console.log(this.form)
    console.log(this.form.statusChanges.subscribe(status => console.log(status)))

  }

}
