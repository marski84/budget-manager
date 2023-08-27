import {IverticalBarConfig} from "@app/modules/charts/models/vertical-bar-config.interface";

export const incomesChartConfig: IverticalBarConfig = {
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
