import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { ChartViewData } from '../../../../modules/Accounting/models/ChartViewData';
import { newOutcome } from '../../../Accounting/models/outcomesData.interface';
import { AccountingService } from '../../accounting.service';

class DialogData {}

@Component({
  selector: 'app-outcomes-dialog',
  templateUrl: './outcomes-dialog.component.html',
  styleUrls: ['./outcomes-dialog.component.css'],
  //
})
export class OutcomesDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<OutcomesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dataToDisplay: ChartViewData,
    private accountingService: AccountingService,
    public dialog: MatDialog
  ) {}

  static openDialog(dialog: MatDialog, config: MatDialogConfig) {
    return dialog.open(OutcomesDialogComponent, config);
  }

  closeDialog() {
    this.dialogRef.close();
  }

  handleDataEmitted(event: newOutcome) {
    console.log(event);
    this.accountingService.registerNewOutcome(event);
  }
}
