import {Component, OnInit} from '@angular/core';
import {AccountingService} from "@app/modules/Accounting/accounting.service";
import {IverticalBarConfig} from "@app/modules/charts/models/vertical-bar-config.interface";
import {CONFIG} from "@app/modules/shared/CONFIG";

const chartConfig: IverticalBarConfig = {
  showXAxis: true,
  showYAxis: true,
  gradient: false,
  showLegend: true,
  showXAxisLabel: true,
  xAxisLabel: 'Month',
  showYAxisLabel: true,
  yAxisLabel: 'Outcomes',
  colorScheme: {
    domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB'],
  }
}

@Component({
  selector: 'app-outcomes',
  templateUrl: './outcomes.component.html',
  styleUrls: ['./outcomes.component.css'],
  providers: [{provide: CONFIG, useValue: chartConfig}]

})
export class OutcomesComponent implements OnInit {

  resultData$ = this.accountingService.fetchOutcomesData()

  constructor(private accountingService: AccountingService) {
  }

  ngOnInit() {
    this.accountingService.fetchOutcomesData().subscribe(data => console.log(data))
  }

}
