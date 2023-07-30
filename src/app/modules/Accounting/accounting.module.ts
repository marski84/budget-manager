import {NgModule} from '@angular/core';
import {MaterialModule} from '../material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {IncomesComponent} from './Incomes/incomes/incomes.component';
import {OutcomesComponent} from './Outcomes/outcomes/outcomes.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import {ChartsModule} from "@app/modules/charts/charts.module";
import {SharedModule} from "@app/modules/shared/shared.module";
import {CustomDialogComponent} from '@app/modules/Accounting/Dialogs/custom-dialog/custom-dialog.component';
import {ViewValuePipe} from './view-value.pipe';
import {ChartDialogComponent} from './Dialogs/chart-dialog/chart-dialog.component';
import {RegisterOutcomeFormComponent} from './Outcomes/register-outcome-form/register-outcome-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    IncomesComponent,
    OutcomesComponent,
    CustomDialogComponent,
    ViewValuePipe,
    ChartDialogComponent,
    RegisterOutcomeFormComponent,
  ],
  imports: [
    MaterialModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    ChartsModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule
  ],
  exports: [IncomesComponent, OutcomesComponent],


})
export class AccountingModule {
}
