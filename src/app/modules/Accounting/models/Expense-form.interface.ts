import {FormControl} from "@angular/forms";


// FormGroup<{
//   month: FormControl<string | null>,
//   outcomeType: FormControl<string | null>,
//   expenseAmount: FormControl<string | null>
// }>

export interface ExpenseFormInterface {
  month: FormControl<string>,
  outcomeType: FormControl<string>,
  expenseAmount: FormControl<string>
}
