import {NgModule} from '@angular/core';
import {VerticalBarComponent} from './vertical-bar/vertical-bar.component';
import {BarChartModule, NgxChartsModule} from "@swimlane/ngx-charts";
import {SharedModule} from "@app/modules/shared/shared.module";


@NgModule({
  declarations: [
    VerticalBarComponent
  ],
  imports: [
    BarChartModule,
    NgxChartsModule,
    SharedModule
  ],
  exports: [VerticalBarComponent, NgxChartsModule],

})
export class ChartsModule {
}
