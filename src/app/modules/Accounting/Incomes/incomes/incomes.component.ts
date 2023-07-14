import {Component, OnInit} from '@angular/core';
import {AccountingService} from '../../accounting.service';
import {tap} from 'rxjs';

@Component({
  selector: 'app-incomes',
  templateUrl: './incomes.component.html',
  styleUrls: ['./incomes.component.css'],
})
export class IncomesComponent implements OnInit {
  incomeData$ = this.accountingService.fetchIncomesData().pipe(tap(data => console.log(data)));
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
    // this.accountingService
    //   .fetchIncomesData()
    //   .pipe(tap((data) => console.log(data)))
    //   .subscribe();
  }

  onSelect(event: Event) {
    console.log(event)
  }

  getData() {
    this.accountingService
      .fetchIncomesData()
      .pipe(tap((data) => console.log(data)))
      .subscribe();
  }

}
