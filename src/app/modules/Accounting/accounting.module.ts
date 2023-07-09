import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerticalBarComponent } from './Incomes/vertical-bar.component';
import { PieChartComponent } from './Outcomes/pie-chart.component';
import { MaterialModule } from '../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { IncomesComponent } from './Incomes/incomes/incomes.component';
import { OutcomesComponent } from './Outcomes/outcomes/outcomes.component';

@NgModule({
  declarations: [
    IncomesComponent,
    OutcomesComponent,
    VerticalBarComponent,
    PieChartComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule,
    NgxChartsModule,
  ],
  exports: [IncomesComponent, OutcomesComponent],
})
export class AccountingModule {}