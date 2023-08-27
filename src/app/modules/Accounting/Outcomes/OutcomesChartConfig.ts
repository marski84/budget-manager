import {IverticalBarConfig} from "@app/modules/charts/models/vertical-bar-config.interface";

export const outcomesChartConfig: IverticalBarConfig = {
  showXAxis: true,
  showYAxis: true,
  gradient: false,
  showLegend: true,
  showXAxisLabel: true,
  xAxisLabel: 'Month',
  showYAxisLabel: true,
  yAxisLabel: 'Outcomes',
  colorScheme: {
    domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB'],
  }
}
