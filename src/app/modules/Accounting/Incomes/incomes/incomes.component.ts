import {Component, OnInit} from '@angular/core';
import {AccountingService} from '../../accounting.service';
import {IverticalBarConfig} from "@app/modules/charts/models/vertical-bar-config.interface";
import {CONFIG} from "@app/modules/shared/CONFIG";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {CustomDialogComponent} from "@app/modules/Accounting/Dialogs/custom-dialog/custom-dialog.component";
import {Observable} from "rxjs";
import {IncomesData} from "@app/modules/Accounting/models/incomesData.interface";


const chartConfig: IverticalBarConfig = {
  showXAxis: true,
  showYAxis: true,
  gradient: false,
  showLegend: true,
  showXAxisLabel: true,
  xAxisLabel: 'Month',
  showYAxisLabel: true,
  yAxisLabel: 'Income',
  colorScheme: {
    domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB'],
  }
}

@Component({
  selector: 'app-incomes',
  templateUrl: './incomes.component.html',
  styleUrls: ['./incomes.component.css'],
  providers: [{provide: CONFIG, useValue: chartConfig}]

})
export class IncomesComponent implements OnInit {
  incomeData$: Observable<IncomesData> = this.accountingService.fetchIncomesData();
  dialogRef!: MatDialogRef<CustomDialogComponent, any>

  // @ViewChild('dialogContent', {read: ViewContainerRef}) dialogContent!: ViewContainerRef

  constructor(
    private accountingService: AccountingService,
    private dialog: MatDialog,
    // private componentFactoryResolver: ComponentFactoryResolver,
    // private viewContainerRef: ViewContainerRef
  ) {
  }

  ngOnInit() {
  }

  onActivate(event: { value: { extra: [] } }) {

    const dataToDisplay = event.value.extra;

    this.dialogRef = this.dialog.open(CustomDialogComponent, {
      hasBackdrop: false,
      position: {top: '10%'},
      data: {
        data: dataToDisplay,
      }
    })


    // const dialogComponentFactory =
    //   this.componentFactoryResolver.resolveComponentFactory(OutcomesComponent);
    // const dialogContent = dialogComponentFactory.create(this.dialogContent.parentInjector);
    // this.dialogContent.insert(dialogContent.hostView)
    // @ts-ignore

  }


  onDeactivate(event: Event) {
    if (event) {
      this.dialogRef.close();
      console.log('ok')

    }
  }
}

