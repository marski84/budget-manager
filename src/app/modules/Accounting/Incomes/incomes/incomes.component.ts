import {Component, Inject, OnInit} from '@angular/core';
import {AccountingService} from '../../accounting.service';
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
  yAxisLabel: 'Income',
  colorScheme: {
    domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB'],
  }
}

@Component({
  selector: 'app-incomes',
  templateUrl: './incomes.component.html',
  styleUrls: ['./incomes.component.css'],
  providers: [{provide: CONFIG, useValue: chartConfig}]

})
export class IncomesComponent implements OnInit {
  incomeData$ = this.accountingService.fetchIncomesData();

  // options for the chart
  // chart do modułu
  // config za pomocą dependency injection
  showXAxis = true;
  toolTipDisplayData = 'init'
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Month';
  showYAxisLabel = true;
  yAxisLabel = 'Income';
  colorScheme = {
    domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB'],
  };

  constructor(
    @Inject(CONFIG) private config: IverticalBarConfig,
    private accountingService: AccountingService) {
    console.log(config)
  }

  ngOnInit() {
  }

  onActivate(event: { value: { extra: [] } }) {
    const regExp = new RegExp(/([[{}"}])/g)
    const commRegExp = new RegExp(/,/g)
    const dataToDisplay = (JSON.stringify(event.value.extra)
      .replace(regExp, ''))
      .replace(commRegExp, ', \n')
      .replace(']', '')

    this.toolTipDisplayData = dataToDisplay
  }
}
