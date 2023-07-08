import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerticalBarComponent } from './vertical-bar/vertical-bar.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { MaterialModule } from '../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [VerticalBarComponent, PieChartComponent],
  imports: [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule,
    NgxChartsModule,
  ],
  exports: [
    VerticalBarComponent,
    PieChartComponent,
    // NgxChartsModule
  ],
})
export class ChartsModule {}
