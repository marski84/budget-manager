import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, Output} from '@angular/core';
import {ActivateDataInterface} from '../../shared/activateData.interface';
import {SelectDataInterface} from '../..//shared/selectData.interface';
import {AbstractBarDataInterface} from '../../Accounting/models/abstractBarData.interface';

import {VerticalBarComponent} from './vertical-bar.component';
import {CONFIG} from "../../shared/CONFIG";

// Mock child component
@Component({
  selector: 'app-bar',
  template: '',
})
class MockBarComponent {
  @Input() data!: AbstractBarDataInterface;
  @Output() onActivate: EventEmitter<ActivateDataInterface> = new EventEmitter<ActivateDataInterface>();
  @Output() onDeactivate: EventEmitter<ActivateDataInterface> = new EventEmitter<ActivateDataInterface>();
  @Output() onSelect: EventEmitter<SelectDataInterface> = new EventEmitter<SelectDataInterface>();
}

describe('NgxChartsBarVerticalComponent', () => {
  let component: VerticalBarComponent;
  let fixture: ComponentFixture<VerticalBarComponent>;

  const config = {
    gradient: true,
    showLegend: true,
    showXAxisLabel: true,
    showYAxisLabel: true,
    xAxisLabel: 'X Axis',
    showXAxis: true,
    yAxisLabel: 'Y Axis',
    showYAxis: true,
  };

  const testData: ActivateDataInterface = {
    value: {
      name: "September",
      value: 5050,
      extra: [
        // @ts-ignore
        {
          Pedicure: 100
        },
        // @ts-ignore
        {
          Pedicure: 100
        },
      ],
      "label": "September"
    },
    "entries": []
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerticalBarComponent],
      providers: [
        {provide: CONFIG, useValue: config}
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalBarComponent);
    component = fixture.componentInstance;

    // Przykładowe dane wejściowe

    component.resultData = [
      {name: 'Data 1', value: 10, extra: []},
      {name: 'Data 2', value: 20, extra: []},
      {name: 'Data 3', value: 30, extra: []}
    ];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct data labels', () => {
    // given
    const bar = fixture.debugElement.nativeElement.querySelector('ngx-charts-bar-vertical');
    // then
    expect(bar.results).toEqual(component.resultData);
    //
  });

  it('should emit data when Activate event started', () => {
    //   given
    const spy = jest.spyOn(component.onActivateEmitted, 'emit');
    // when
    component.onActivate(testData)
    //   then
    expect(spy).toHaveBeenCalledWith(testData);
  });

  it('should emit data when Dectivate event started', () => {
    //   given
    const spy = jest.spyOn(component.onDeactivateEmitted, 'emit');
    // when
    component.onDeactivate(testData);
    //   then
    expect(spy).toHaveBeenCalledWith(testData);
  });


  it('should emit data when Select event started', () => {
    //   given
    const testSelectData: SelectDataInterface = {
      name: "September",
      value: 5050,
      extra: [
        // @ts-ignore
        {
          Pedicure: 100
        },
        // @ts-ignore
        {
          Pedicure: 100
        },
      ],
      label: "September"
    }
    const spy = jest.spyOn(component.onSelectEmitted, 'emit');
    // when
    component.onSelect(testSelectData);
    //   then
    expect(spy).toHaveBeenCalledWith(testSelectData);
  });

});
