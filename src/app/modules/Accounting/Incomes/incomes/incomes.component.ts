import {Component, OnInit} from '@angular/core';
import {AccountingService} from '../../accounting.service';

@Component({
  selector: 'app-incomes',
  templateUrl: './incomes.component.html',
  styleUrls: ['./incomes.component.css'],
})
export class IncomesComponent implements OnInit {
  incomeData$ = this.accountingService.fetchIncomesData();
  toolTipDisplayData = 'init'
  // options for the chart
  showXAxis = true;
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

  constructor(private accountingService: AccountingService) {
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
