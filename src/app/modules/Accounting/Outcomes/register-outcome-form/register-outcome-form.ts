import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ExpenseFormInterface } from '../../models/ExpenseFormInterface';

export class RegisterOutcomeForm extends FormGroup {
  constructor(form: ExpenseFormInterface) {
    super(form);
  }

  static create(): RegisterOutcomeForm {
    return new RegisterOutcomeForm({
      month: new FormControl('', [Validators.required]) as FormControl<string>,
      outcomeType: new FormControl('', [
        Validators.required,
      ]) as FormControl<string>,
      expenseAmount: new FormControl('', [
        Validators.required,
      ]) as FormControl<string>,
    });
  }

  reactToTypeChange() {}

  getPayloadForApi() {
    // this.controls.
    return {
      // outcome_type
    };
  }
}
