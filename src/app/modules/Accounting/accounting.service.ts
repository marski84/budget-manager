import {Injectable} from '@angular/core';
import {map, of} from 'rxjs';
import {outcomesData} from './data/outcomes';
import {incomesData} from "@app/modules/Accounting/data/incomes";
import {Income} from "@app/modules/Accounting/models/incomeData.interface";

interface IncomeData {
  [key: string]: {
    incomes: Income<any>[]
  }
}

interface FormatOutcomeDataParams {
  [key: string]: {}
}

@Injectable({
  providedIn: 'root',
})
export class AccountingService {
  incomeData: any
  // IncomeData[]
  // Income<MonthIncomeData>[]
  outcomeData: any
  //   {
  //   [key: string]: {
  //     rent: number,
  //     ingredients: number,
  //     repairments: number,
  //   }
  // }

  constructor() {
    this.incomeData = incomesData
    this.outcomeData = outcomesData;
  }

  fetchIncomesData() {
    return of(this.incomeData)
      .pipe(
        // delay(5000),
        map(data => this.formatIncomesData((data))),
        // tap(data => console.log(data))
      );
  }

  fetchOutcomesData() {
    return of(this.outcomeData).pipe(
      // delay(5000)
      map(data => this.formatOutcomeData(data))
    );
  }

  private formatIncomesData(data: Array<IncomeData>) {
    return data.map(record => {
        const key = Object.keys(record);
        const value: any = Object.values(record)[0];
        const incomes: {}[][] = Object.values(value)

        const incomesSum = incomes[0].reduce((acc: number, income) => {
          const incomeValue = Number(Object.values(income).join())
          acc += incomeValue
          return acc
        }, 0)

        const result = {
          name: key.join(),
          value: incomesSum,
          extra: incomes[0]
        }
        return result
      }
    )
  }

  private formatOutcomeData(data: FormatOutcomeDataParams[]) {
    return data.map(record => {
        const key = Object.keys(record);

        const value: any = Object.values(record)[0];

        const outcomes: {}[][] = Object.values(value)
        console.log(outcomes)

        const outcomesSum = outcomes.reduce((acc: number, outcome) => {
          const outcomeValue = Number(outcome)
          acc += outcomeValue
          return acc
        }, 0)

        const result = {
          name: key.join(),
          value: outcomesSum,
          extra: outcomes[0]
        }
        return result
      }
    )
  }
}


