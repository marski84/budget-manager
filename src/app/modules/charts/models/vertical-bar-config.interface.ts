export interface IverticalBarConfig {
  showXAxis: boolean;
  showYAxis: boolean
  gradient: boolean
  showLegend: boolean
  showXAxisLabel: boolean
  xAxisLabel: string
  showYAxisLabel: boolean
  yAxisLabel: string
  colorScheme: {
    domain: string[],
  };
}
