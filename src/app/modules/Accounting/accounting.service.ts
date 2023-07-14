import {Injectable} from '@angular/core';
import {map, of} from 'rxjs';
import {outcomesData} from './data/outcomes';
import {incomesData} from "@app/modules/Accounting/data/incomes";
import {Income} from "@app/modules/Accounting/models/incomeData.interface";

interface Example {
  [key: string]: {
    incomes: Income<any>[]
  }
}

// {
//   January: {
//     rent: 500,
//       ingredients: 200,
//   },
// },

interface FormatOutcomeDataParams {
  [key: string]: {}
}

@Injectable({
  providedIn: 'root',
})
export class AccountingService {
  incomeData: Example[]
  // Income<MonthIncomeData>[]
  outcomeData: any

  constructor() {
    // this.incomeData =
    //   [
    //
    //
    //     {
    //       "name": "January",
    //       "value": 2000,
    //       "extra": {
    //         "incomes": [
    //           {"Pedicure": 100},
    //           {"Manicure": 120},
    //           {"Pedicure": 100},
    //           {"Schooling": 950},
    //           {"Manicure": 120},
    //           {"Pedicure": 100},
    //         ],
    //       }
    //     },
    //
    //
    //     {
    //       "name": "Germany",
    //       "value": 40632,
    //       "extra": {
    //         "code": "de"
    //       }
    //     },
    //     {
    //       "name": "France",
    //       "value": 36745,
    //       "extra": {
    //         "code": "fr"
    //       }
    //     },
    //     {
    //       "name": "Italy",
    //       "value": 35800,
    //       "extra": {
    //         "code": "it"
    //       }
    //     },
    //     {
    //       "name": "Kuwait",
    //       "value": 45260
    //     },
    //     {
    //       "name": "Eritrea",
    //       "value": 37637
    //     },
    //     {
    //       "name": "Equatorial Guinea",
    //       "value": 46307
    //     },
    //     {
    //       "name": "Serbia",
    //       "value": 26427
    //     }
    //   ]
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

  private formatIncomesData(data: Array<Example>) {
    data.map(record => {
        const key = Object.keys(record);

        const value: any = Object.values(record)[0];
        console.log(Object.values(value))
        const incomes: {}[][] = Object.values(value)
        console.log(incomes[0])

        const incomesSum = incomes[0].reduce((acc: number, income) => {
          const incomeValue = Number(Object.values(income).join())
          acc += incomeValue
          return acc
        }, 0)


        const result = {
          name: key.join(),
          value: incomesSum,
          extra: incomes
        }

        return JSON.stringify(result);
      }
    )
  }

  private formatOutcomeData(data: FormatOutcomeDataParams[]) {
    data.map(record => {
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
          extra: outcomes
        }
        return JSON.stringify(result);
      }
    )
  }
}


