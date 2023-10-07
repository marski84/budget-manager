import {Injectable} from '@angular/core';
import {finalize, map, Observable, of, tap} from 'rxjs';
import {incomesData} from "../../modules/Accounting/data/incomes";
import {outcomesData} from "../../modules/Accounting/data/outcomes";
import {newOutcome} from "../../modules/Accounting/models/outcomesData.interface";
import {DataFormatter} from "../../modules/Accounting/DataFormatter";
import {AbstractBarDataInterface} from "../..//modules/Accounting/models/abstractBarData.interface";
import {SpinnerService} from '../../modules/spinner/spinner.service';


@Injectable()
export class AccountingService {

  constructor(private spinnerService: SpinnerService) {
  }

  fetchIncomesData(): Observable<AbstractBarDataInterface[]> {
    return of(incomesData).pipe(
      tap(() => this.spinnerService.show()),
      // delay(5000),
      map((data) => DataFormatter.formatIncomesData(data)),
      finalize(() => this.spinnerService.hide())
    );
  }

  fetchOutcomesData(): Observable<AbstractBarDataInterface[]> {
    return of(outcomesData).pipe(
      tap(() => this.spinnerService.show()),
      // delay(5000),
      map((data) => DataFormatter.formatOutcomeData(data)),
      finalize(() => this.spinnerService.hide())
    )
  }

  registerNewOutcome(data: newOutcome) {
    return data
  }
}
