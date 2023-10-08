import {Component, OnInit} from '@angular/core';
import {AccountingService} from '../../accounting.service';
import {CONFIG} from "../../../shared/CONFIG";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {CustomDialogComponent} from "../../../Accounting/Dialogs/custom-dialog/custom-dialog.component";
import {Observable} from "rxjs";
import {incomesChartConfig} from "../../../Accounting/Incomes/incomesChartConfig";
import {AbstractBarDataInterface} from "../../../Accounting/models/abstractBarData.interface";
import {ActivateDataInterface} from "@app/modules/shared/activateData.interface";


@Component({
  selector: 'app-incomes',
  templateUrl: './incomes.component.html',
  styleUrls: ['./incomes.component.css'],
  providers: [{provide: CONFIG, useValue: incomesChartConfig}]

})
export class IncomesComponent implements OnInit {
  incomeData$: Observable<AbstractBarDataInterface[]> = this.accountingService.fetchIncomesData();
  dialogRef!: MatDialogRef<CustomDialogComponent, {
    data: {
      data: AbstractBarDataInterface[]
    },
    hasBackdrop: boolean,
    position: { [key: string]: string }
  }>


  constructor(
    private accountingService: AccountingService,
    private dialog: MatDialog,
  ) {
  }

  ngOnInit() {
  }

  onActivate(event: ActivateDataInterface) {
    const dataToDisplay = event.value.extra;
    console.log(dataToDisplay)


    this.dialogRef = this.dialog.open(CustomDialogComponent, {
      hasBackdrop: false,
      position: {top: '10%'},
      data: {
        data: dataToDisplay,
      }
    })
  }


  onDeactivate(event: ActivateDataInterface) {
    if (!event) {
      return;
    }
    this.dialogRef.close();
  }
}

