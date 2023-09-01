import {FormatOutcomeDataParams} from "@app/modules/Accounting/models/FormatOutcomeDataParams";
import {IncomesData} from "@app/modules/Accounting/models/incomesData.interface";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {inject} from "@angular/core";
import {OutcomesDialogComponent} from "@app/modules/Accounting/Dialogs/outcomes-dialog/outcomes-dialog.component";

export class DataFormatter {

  static formatIncomesData(data: Array<IncomesData>) {
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

  static formatOutcomeData(data: Array<FormatOutcomeDataParams>) {
    return data.map((record) => {
      const key = Object.keys(record);

      const value: any = Object.values(record)[0];

      const outcomes = Object.values(record[key[0]])

      const outcomesSum = outcomes.reduce((acc: number, outcome) => {
        const outcomeValue = Number(outcome);
        acc += outcomeValue;
        return acc;
      }, 0);

      const result = {
        name: key.join(),
        value: outcomesSum,
        extra: value,
      };

      console.log(result)
      return result;
    });
  }

  static openDialog(config: MatDialogConfig) {
    const dialog = inject(MatDialog)
    dialog.open(OutcomesDialogComponent, config)
  }
}
