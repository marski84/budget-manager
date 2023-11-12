import {FormControl} from '@angular/forms';

export type ExpenseFormInterface = {
  month: FormControl<string | null>;
  outcomeType: FormControl<string | null>;
  expenseAmount: FormControl<string | null>;
}
