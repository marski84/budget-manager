import {Component, OnInit} from '@angular/core';
import {AccountingService} from '../../accounting.service';
import {CONFIG} from "@app/modules/shared/CONFIG";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {CustomDialogComponent} from "@app/modules/Accounting/Dialogs/custom-dialog/custom-dialog.component";
import {Observable} from "rxjs";
import {incomesChartConfig} from "@app/modules/Accounting/Incomes/incomesChartConfig";
import {AbstractBarDataInterface} from "@app/modules/Accounting/models/abstractBarData.interface";


@Component({
  selector: 'app-incomes',
  templateUrl: './incomes.component.html',
  styleUrls: ['./incomes.component.css'],
  providers: [{provide: CONFIG, useValue: incomesChartConfig}]

})
export class IncomesComponent implements OnInit {
  incomeData$: Observable<AbstractBarDataInterface[]> = this.accountingService.fetchIncomesData();
  dialogRef!: MatDialogRef<CustomDialogComponent, any>

  isLoading$!: Observable<boolean>

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
    if (!event) {
      return;
    }
    this.dialogRef.close();
  }
}

