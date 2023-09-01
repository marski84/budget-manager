import {Income} from "@app/modules/Accounting/models/incomesData.interface";
import {Outcome} from "@app/modules/Accounting/models/outcomesData.interface";

export interface AbstractBarDataInterface {
  name: string;
  value: number;
  extra: Income[] | Outcome[]
}


