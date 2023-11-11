import { FormControl } from '@angular/forms';

export type ExpenseFormInterface = {
  month: FormControl<string>;
  outcomeType: FormControl<string>;
  expenseAmount: FormControl<string>;
}
