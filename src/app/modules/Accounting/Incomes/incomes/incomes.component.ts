import {Component, OnInit} from '@angular/core';
import {AccountingService} from '../../accounting.service';
import {tap} from 'rxjs';

@Component({
  selector: 'app-incomes',
  templateUrl: './incomes.component.html',
  styleUrls: ['./incomes.component.css'],
})
export class IncomesComponent implements OnInit {
  constructor(private accountingService: AccountingService) {
  }

  ngOnInit() {
    this.accountingService
      .fetchIncomesData()
      .pipe(tap((data) => console.log(data)))
      .subscribe();
  }

  getData() {
    this.accountingService
      .fetchIncomesData()
      .pipe(tap((data) => console.log(data)))
      .subscribe();
  }

}
