import {NgModule} from '@angular/core';
import {MaterialModule} from '../material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {IncomesComponent} from './Incomes/incomes/incomes.component';
import {OutcomesComponent} from './Outcomes/outcomes/outcomes.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import {ChartsModule} from "@app/modules/charts/charts.module";
import {SharedModule} from "@app/modules/shared/shared.module";
import { CustomDialogComponent } from './custom-dialog/custom-dialog.component';

@NgModule({
  declarations: [
    IncomesComponent,
    OutcomesComponent,
    CustomDialogComponent,
  ],
  imports: [
    MaterialModule,
    BrowserAnimationsModule,
    // NgxChartsModule,
    MatTooltipModule,
    ChartsModule,
    SharedModule
  ],
  exports: [IncomesComponent, OutcomesComponent],

})
export class AccountingModule {
}
