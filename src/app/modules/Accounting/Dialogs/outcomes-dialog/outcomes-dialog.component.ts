import {Component, inject, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ChartViewData} from "@app/modules/Accounting/models/ChartViewData";
import {newOutcome} from "@app/modules/Accounting/models/outcomesData.interface";
import {AccountingService} from "@app/modules/Accounting/accounting.service";

class DialogData {
}

@Component({
  selector: 'app-outcomes-dialog',
  templateUrl: './outcomes-dialog.component.html',
  styleUrls: ['./outcomes-dialog.component.css']
})
export class OutcomesDialogComponent {
  dialog = inject(MatDialog)

  constructor(
    public dialogRef: MatDialogRef<OutcomesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dataToDisplay: ChartViewData,
    private accountingService: AccountingService,
    // public dialog: MatDialog
  ) {
  }

  // static openDialog(config: MatDialogConfig) {
  //   this.dialog.open(OutcomesDialogComponent, config)
  // }


  closeDialog() {
    this.dialogRef.close()
  }

  handleDataEmitted(event: newOutcome) {
    console.log(event)
    this.accountingService.registerNewOutcome(event);
  }

}
