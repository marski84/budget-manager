import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';
import { incomesData } from './data/incomes';
import { outcomesData } from './data/outcomes';
import {Data} from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class AccountingService {
  incomeData: Data[];
  outcomeData: any;

  constructor() {
    this.incomeData = incomesData;
    this.outcomeData = outcomesData;
  }

  fetchIncomesData() {
    return of(this.incomeData).pipe(delay(5000));
  }

  fetchOutcomesData() {
    return of(this.outcomeData).pipe(delay(5000));
  }
}
