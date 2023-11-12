import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ExpenseFormInterface} from '../../models/ExpenseFormInterface';

export class RegisterOutcomeForm extends FormGroup {

  constructor(
    form: ExpenseFormInterface) {
    super(form);
  }


  static create(): RegisterOutcomeForm {
    return new RegisterOutcomeForm({
      expenseAmount: new FormControl('', [Validators.required]),
      outcomeType: new FormControl('', [Validators.required]),
      month: new FormControl('', [Validators.required])
    })
  }


  reactToMonthChange(month: string) {
    if (this.get('month')?.value !== month) {
      this.get('month')?.setValue(month);
    }
  }


}
