import {Component, OnInit} from '@angular/core';
import {AccountingService} from "@app/modules/Accounting/accounting.service";
import {IverticalBarConfig} from "@app/modules/charts/models/vertical-bar-config.interface";
import {CONFIG} from "@app/modules/shared/CONFIG";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ChartDialogComponent} from "@app/modules/Accounting/Dialogs/chart-dialog/chart-dialog.component";
import {ChartEventData} from "@app/modules/Accounting/models/ChartEventData.interface";

const chartConfig: IverticalBarConfig = {
  showXAxis: true,
  showYAxis: true,
  gradient: false,
  showLegend: true,
  showXAxisLabel: true,
  xAxisLabel: 'Month',
  showYAxisLabel: true,
  yAxisLabel: 'Outcomes',
  colorScheme: {
    domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB'],
  }
}

@Component({
  selector: 'app-outcomes',
  templateUrl: './outcomes.component.html',
  styleUrls: ['./outcomes.component.css'],
  providers: [{provide: CONFIG, useValue: chartConfig}]

})
export class OutcomesComponent implements OnInit {

  resultData$ = this.accountingService.fetchOutcomesData()
  private dialogRef!: MatDialogRef<ChartDialogComponent, any>


  constructor(private accountingService: AccountingService, private dialog: MatDialog,
  ) {
  }

  ngOnInit() {
  }


  handleOpenDialog(event: ChartEventData) {

    console.log(event)
    this.dialogRef = this.dialog.open(ChartDialogComponent, {
      width: '70%',
      height: '60%',
      hasBackdrop: false,
      data: {
        name: event.name,
        value: event.value,
        extra: event.extra
      }
    })
  }


}
