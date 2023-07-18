import {Injectable} from '@angular/core';
import {map, Observable, of} from 'rxjs';
import {outcomesData} from './data/outcomes';
import {incomesData} from "@app/modules/Accounting/data/incomes";

export interface IncomeData {
  [month: string]: {
    incomes: {
      [key: string]: number;
    }[];
  };
}

interface FormatOutcomeDataParams {
  [key: string]: {};
}

@Injectable({
  providedIn: 'root',
})
export class AccountingService {
  // IncomeData[]
  // Income<MonthIncomeData>[]
  outcomeData: any;
  //   {
  //   [key: string]: {
  //     rent: number,
  //     ingredients: number,
  //     repairments: number,
  //   }
  // }

  constructor() {
    this.outcomeData = outcomesData;
  }

  fetchIncomesData(): Observable<any> {
    return of(incomesData).pipe(
      // delay(5000),
      map((data) => this.formatIncomesData(data))
      // tap(data => console.log(data))
    );
  }

  fetchOutcomesData() {
    return of([]).pipe(
      // delay(5000)
      map((data) => this.formatOutcomeData(data))
    );
  }

  private formatIncomesData(data: Array<IncomeData>) {
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

      const outcomes: {}[][] = Object.values(value);

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
      return result;
    });
  }
}
