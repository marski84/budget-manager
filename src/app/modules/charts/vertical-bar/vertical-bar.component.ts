import {Component, EventEmitter, Inject, Input, Output} from '@angular/core';
import {IverticalBarConfig} from "@app/modules/charts/models/vertical-bar-config.interface";
import {CONFIG} from "@app/modules/shared/CONFIG";

@Component({
  selector: 'app-vertical-bar',
  templateUrl: './vertical-bar.component.html',
  styleUrls: ['./vertical-bar.component.css'],
})
export class VerticalBarComponent {
  // otypować na litość Boską :)
  @Input() resultData: any
  @Output() onActivateEmitted: EventEmitter<any> = new EventEmitter<any>();
  @Output() onDeactivateEmitted: EventEmitter<any> = new EventEmitter<any>();
  @Output() onSelectEmitted: EventEmitter<any> = new EventEmitter<any>();
  // config za pomocą dependency injection

  // options for the chart
  // chart do modułu
  showXAxis = true;
  showYAxis = true;
  xAxisLabel = '';
  yAxisLabel = '';
  showXAxisLabel = true;
  showYAxisLabel = true;
  gradient = false;
  showLegend = true;


  colorScheme = {
    domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB'],
  };

  constructor(
    @Inject(CONFIG) private config: IverticalBarConfig) {
    // console.log(config)
    // TODO: rozważ korzystanie z config bezpośrednio
    this.showXAxis = config.showXAxis
    this.showYAxis = config.showYAxisLabel
    this.xAxisLabel = config.xAxisLabel
    this.yAxisLabel = config.yAxisLabel
    this.gradient = config.gradient
    this.showLegend = config.showLegend
    this.colorScheme = config.colorScheme
  }

  onActivate(event: Event) {
    this.onActivateEmitted.emit(event)
  }

  onDeactivate(event: Event) {
    this.onDeactivateEmitted.emit(event)
  }

  onSelect(event: Event) {
    this.onSelectEmitted.emit(event)
  }

}
