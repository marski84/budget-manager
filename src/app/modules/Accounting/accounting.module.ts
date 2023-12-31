import {NgModule} from '@angular/core';
import {MaterialModule} from '../material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {IncomesComponent} from './Incomes/incomes/incomes.component';
import {OutcomesComponent} from './Outcomes/outcomes/outcomes.component';
import {ChartsModule} from "../../modules/charts/charts.module";
import {SharedModule} from "../../modules/shared/shared.module";
import {CustomDialogComponent} from '../../modules/Accounting/Dialogs/custom-dialog/custom-dialog.component';
import {RecordDataPipe} from './RecordData.pipe';
import {OutcomesDialogComponent} from '../../modules/Accounting/Dialogs/outcomes-dialog/outcomes-dialog.component';
import {RegisterOutcomeFormComponent} from './Outcomes/register-outcome-form/register-outcome-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AccountingService} from "../../modules/Accounting/accounting.service";
import {SpinnerModule} from "../../modules/spinner/spinner.module";


@NgModule({
  declarations: [
    IncomesComponent,
    OutcomesComponent,
    CustomDialogComponent,
    RecordDataPipe,
    OutcomesDialogComponent,
    RegisterOutcomeFormComponent,
  ],
  imports: [
    MaterialModule,
    BrowserAnimationsModule,
    ChartsModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    SpinnerModule
  ],
  exports: [IncomesComponent, OutcomesComponent, RegisterOutcomeFormComponent],
  providers: [AccountingService]


})
export class AccountingModule {
}
