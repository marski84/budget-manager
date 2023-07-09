import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncomesComponent } from '../Accounting/Incomes/incomes/incomes.component';
import { OutcomesComponent } from '../Accounting/Outcomes/outcomes/outcomes.component';

const ROUTES: Routes = [
  { path: 'incomes', component: IncomesComponent },
  { path: 'outcomes', component: OutcomesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
