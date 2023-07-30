import {Pipe, PipeTransform} from '@angular/core';
import {Outcome} from "@app/modules/Accounting/models/outcomesData.interface";

@Pipe({
  name: 'viewValue'
})
export class ViewValuePipe implements PipeTransform {

  transform(value: Outcome): string {
    const key = Object.keys(value)[0]

    const result = `${key}: ${value[key]}`

    return result;
  }

}
