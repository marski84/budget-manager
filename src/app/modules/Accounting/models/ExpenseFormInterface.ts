import {FormControl} from "@angular/forms";

export interface ExpenseFormInterface {
  month: FormControl<string>;
  outcomeType: FormControl<string>,
  expenseAmount: FormControl<string>
}


