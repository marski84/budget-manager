import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ChartViewData} from "@app/modules/Accounting/models/ChartViewData";

class DialogData {
}

@Component({
  selector: 'app-chart-dialog',
  templateUrl: './chart-dialog.component.html',
  styleUrls: ['./chart-dialog.component.css']
})
export class ChartDialogComponent {

  dataToDisplay: ChartViewData

  a = [
    {
      "name": "Germany",
      "value": 8940000
    },
    {
      "name": "USA",
      "value": 5000000
    }
  ]

  constructor(public dialogRef: MatDialogRef<ChartDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: ChartViewData) {
    this.dataToDisplay = data
    console.log(this.dataToDisplay)
  }

  closeDialog() {
    this.dialogRef.close()
  }

}
