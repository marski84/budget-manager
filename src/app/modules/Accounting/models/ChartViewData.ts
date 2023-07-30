import {Outcome} from "@app/modules/Accounting/models/outcomesData.interface";

export interface ChartViewData {
  name: string
  value: number,
  title: string,
  dataToDisplay: Outcome[]
}
