import {FormatOutcomeDataParams} from "../../modules/Accounting/models/FormatOutcomeDataParams";
import {IncomesData} from "../../modules/Accounting/models/incomesData.interface";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {inject} from "@angular/core";
import {OutcomesDialogComponent} from "../../modules/Accounting/Dialogs/outcomes-dialog/outcomes-dialog.component";
import {AbstractBarDataInterface} from "@app/modules/Accounting/models/abstractBarData.interface";

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

            const result: AbstractBarDataInterface = {
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

            const value: any = Object.values(record);

            const outcomes: string[] = Object.values(record[key[0]])

            const outcomesSum = outcomes.reduce((acc: number, outcome) => {
                const outcomeValue = Number(outcome);
                acc += outcomeValue;
                return acc;
            }, 0);

            const result: AbstractBarDataInterface = {
                name: key.join(),
                value: outcomesSum,
                extra: value,
            };

            return result;
        });
    }

    static openDialog(config: MatDialogConfig) {
        const dialog = inject(MatDialog)
        dialog.open(OutcomesDialogComponent, config)
    }
}
