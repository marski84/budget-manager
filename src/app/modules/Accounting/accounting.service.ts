import {Injectable} from '@angular/core';
import {map, Observable, of} from 'rxjs';
import {incomesData} from "@app/modules/Accounting/data/incomes";
import {outcomesData} from "@app/modules/Accounting/data/outcomes";
import {newOutcome} from "@app/modules/Accounting/models/outcomesData.interface";
import {DataFormatClass} from "@app/modules/Accounting/DataFormatClass";


// TODO: to nie jest root
@Injectable()
export class AccountingService {

  fetchIncomesData(): Observable<any> {
    return of(incomesData).pipe(
      // delay(5000),
      map((data) => DataFormatClass.formatIncomesData(data))
    );
  }

  fetchOutcomesData() {
    return of(outcomesData).pipe(
      // delay(5000)
      map((data) => DataFormatClass.formatOutcomeData(data)
      ))
  }

  registerNewOutcome(data: newOutcome) {
    console.log(data)
  }


}
