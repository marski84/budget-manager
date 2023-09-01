import {Pipe, PipeTransform} from '@angular/core';
import {Outcome} from "@app/modules/Accounting/models/outcomesData.interface";

@Pipe({
  name: 'recordData'
})
export class RecordDataPipe implements PipeTransform {

  transform(value: Outcome): string {
    const key = Object.keys(value)[0]

    const result = `${key}: ${value[key]}`

    return result;
  }

}
