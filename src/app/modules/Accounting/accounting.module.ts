import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {IncomesComponent} from './Incomes/incomes/incomes.component';
import {OutcomesComponent} from './Outcomes/outcomes/outcomes.component';
import {MatTooltipModule} from "@angular/material/tooltip";

@NgModule({
  declarations: [
    IncomesComponent,
    OutcomesComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    MatTooltipModule,
  ],
  exports: [IncomesComponent, OutcomesComponent],
})
export class AccountingModule {
}
