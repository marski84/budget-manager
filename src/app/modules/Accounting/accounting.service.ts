import {Injectable} from '@angular/core';
import {map, Observable, of} from 'rxjs';
import {incomesData} from "@app/modules/Accounting/data/incomes";
import {IncomesData} from "@app/modules/Accounting/models/incomesData.interface";
import {outcomesData} from "@app/modules/Accounting/data/outcomes";


interface FormatOutcomeDataParams {
  [key: string]: {};
}

@Injectable({
  providedIn: 'root',
})
export class AccountingService {

  constructor() {
  }

  fetchIncomesData(): Observable<any> {
    return of(incomesData).pipe(
      // delay(5000),
      map((data) => this.formatIncomesData(data))
    );
  }

  fetchOutcomesData() {
    return of(outcomesData).pipe(
      // delay(5000)
      map((data) => this.formatOutcomeData(data))
    );
  }

  private formatIncomesData(data: Array<IncomesData>) {
    return data.map((record) => {
      const monthKey = Object.keys(record)[0];
      const incomes = record[monthKey].incomes

      const incomesSum = incomes.reduce((acc: number, income) => {
        const incomeValue = Number(Object.values(income).join());
        acc += incomeValue;
        return acc;
      }, 0);

      const result = {
        name: monthKey,
        value: incomesSum,
        extra: incomes,
      };
      return result;
    });
  }

  private formatOutcomeData(data: FormatOutcomeDataParams[]) {
    return data.map((record) => {
      const key = Object.keys(record);

      const value: any = Object.values(record)[0];

      const outcomes = Object.values(record[key[0]])
      // console.log(outcomes2)

      // const outcomes: {}[][] = Object.values(value);
      // console.log(outcomes)

      const outcomesSum = outcomes.reduce((acc: number, outcome) => {
        const outcomeValue = Number(outcome);
        acc += outcomeValue;
        return acc;
      }, 0);

      const result = {
        name: key.join(),
        value: outcomesSum,
        extra: outcomes,
      };

      console.log(result)
      return result;
    });
  }
}
