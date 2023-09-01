import {Injectable} from '@angular/core';
import {delay, finalize, map, Observable, of, tap} from 'rxjs';
import {incomesData} from "@app/modules/Accounting/data/incomes";
import {outcomesData} from "@app/modules/Accounting/data/outcomes";
import {newOutcome} from "@app/modules/Accounting/models/outcomesData.interface";
import {DataFormatter} from "@app/modules/Accounting/DataFormatter";
import {AbstractBarDataInterface} from "@app/modules/Accounting/models/abstractBarData.interface";
import {SpinnerService} from "@app/modules/spinner/spinner.service";


@Injectable()
export class AccountingService {

  constructor(private spinnerService: SpinnerService) {

  }


  fetchIncomesData(): Observable<AbstractBarDataInterface[]> {
    return of(incomesData).pipe(
      tap(() => this.spinnerService.show()),
      delay(5000),
      map((data) => {
        this.spinnerService.hide()
        return DataFormatter.formatIncomesData(data)
      }),
      finalize(() => this.spinnerService.hide())
    );
  }

  fetchOutcomesData(): Observable<AbstractBarDataInterface[]> {
    return of(outcomesData).pipe(
      // delay(5000)
      map((data) => DataFormatter.formatOutcomeData(data)
      ))
  }

  registerNewOutcome(data: newOutcome) {
    console.log(data)
  }


}
