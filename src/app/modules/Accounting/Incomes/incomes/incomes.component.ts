import {Component, OnInit} from '@angular/core';
import {AccountingService} from '../../accounting.service';

@Component({
  selector: 'app-incomes',
  templateUrl: './incomes.component.html',
  styleUrls: ['./incomes.component.css'],
})
export class IncomesComponent implements OnInit {
  incomeData$ =
    this.accountingService.fetchIncomesData();
  dataToDisplay: any = ''
  toolTipTemplate = ''
  incomeData: any
  // options for the chart
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Sales';
  timeline = true;
  colorScheme = {
    domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB'],
  };


  constructor(private accountingService: AccountingService) {

  }

  ngOnInit() {

  }

  onActivate(event: { value: { extra: [] } }) {
    console.log(event)
    // this.toolTipTemplate = `<div>okok</div>`
    this.dataToDisplay = event.value.extra
    console.log(this.dataToDisplay[0][0])
    this.toolTipTemplate = `${this.dataToDisplay[0][0]}`


  }


}
