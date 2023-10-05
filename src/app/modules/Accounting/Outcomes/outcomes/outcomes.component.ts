import {Component, OnInit} from '@angular/core';
import {AccountingService} from '../../../Accounting/accounting.service';
import {CONFIG} from '../../../shared/CONFIG';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {OutcomesDialogComponent} from '../../../Accounting/Dialogs/outcomes-dialog/outcomes-dialog.component';
import {ChartEventData} from '../../models/ChartEventData.interface';
import {outcomesChartConfig} from '../../../Accounting/Outcomes/OutcomesChartConfig';
import {Observable} from 'rxjs';
import {AbstractBarDataInterface} from '../../../Accounting/models/abstractBarData.interface';

@Component({
  selector: 'app-outcomes',
  templateUrl: './outcomes.component.html',
  styleUrls: ['./outcomes.component.css'],
  providers: [{provide: CONFIG, useValue: outcomesChartConfig}],
})
export class OutcomesComponent implements OnInit {
  resultData$: Observable<AbstractBarDataInterface[]> =
    this.accountingService.fetchOutcomesData();
  private dialogRef!: MatDialogRef<OutcomesDialogComponent, any>;

  constructor(
    private accountingService: AccountingService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit() {
  }

  handleOpenDialog(event: ChartEventData) {
    const displayToDisplay = Object.keys(event.extra).map((name) => {
      return {
        name,
        value: event.extra[name as any],
      };
    });

    OutcomesDialogComponent.openDialog(this.dialog, {
      width: '85%',
      height: '85%',
      hasBackdrop: false,
      data: {
        name: event.name,
        value: event.value,
        title: 'Monthly expenses details',
        dataToDisplay: displayToDisplay,
      },
    });
  }
}
