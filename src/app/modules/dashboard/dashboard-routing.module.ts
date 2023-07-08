import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerticalBarComponent } from '../ngx-charts/vertical-bar/vertical-bar.component';
import { PieChartComponent } from '../ngx-charts/pie-chart/pie-chart.component';

const ROUTES: Routes = [
  { path: 'vertical-chart', component: VerticalBarComponent },
  { path: 'pie-chart', component: PieChartComponent },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
