import {Component, EventEmitter, Inject, Input, Output} from '@angular/core';
import {IverticalBarConfig} from "../../charts/models/vertical-bar-config.interface";
import {CONFIG} from "../../shared/CONFIG";
import {AbstractBarDataInterface} from "../../Accounting/models/abstractBarData.interface";
import {ActivateDataInterface} from "../../shared/activateData.interface";
import {SelectDataInterface} from "../../shared/selectData.interface";

@Component({
  selector: 'app-vertical-bar',
  templateUrl: './vertical-bar.component.html',
  styleUrls: ['./vertical-bar.component.css'],
})
export class VerticalBarComponent {
  // otypować na litość Boską :)
  // otypowane
  @Input() resultData!: AbstractBarDataInterface[]
  @Output() onActivateEmitted: EventEmitter<ActivateDataInterface> = new EventEmitter<ActivateDataInterface>();
  @Output() onDeactivateEmitted: EventEmitter<ActivateDataInterface> = new EventEmitter<ActivateDataInterface>();
  @Output() onSelectEmitted: EventEmitter<SelectDataInterface> = new EventEmitter<SelectDataInterface>();

  colorScheme = {
    domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB'],
  };

  constructor(
    @Inject(CONFIG) public config: IverticalBarConfig) {
  }

  onActivate(event: ActivateDataInterface) {
    this.onActivateEmitted.emit(event)
  }

  onDeactivate(event: ActivateDataInterface) {
    this.onDeactivateEmitted.emit(event)
  }

  onSelect(event: SelectDataInterface) {
    this.onSelectEmitted.emit(event)
  }

}
