/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {OutcomesComponent} from './outcomes.component';
import {of} from "rxjs";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {AccountingService} from "../../accounting.service";
import {SpinnerService} from "../../../spinner/spinner.service";
import {outcomesChartConfig} from "../../Outcomes/OutcomesChartConfig";
import {CONFIG} from "../../../shared/CONFIG";

describe('OutcomesComponent', () => {
  let component: OutcomesComponent;
  let fixture: ComponentFixture<OutcomesComponent>;
  let accountingService: AccountingService;
  let dialog: MatDialog;

  class MatDialogRefMock {
    close() {
      return jest.fn()
    }

    open() {
      return jest.fn()
    }

  }

  const mockData = of([{
    "name": "January",
    "value": 1490,
    "extra": [
      {
        "Pedicure": 100
      },
      {
        "Manicure": 120
      },
      {
        "Pedicure": 100
      },
      {
        "Schooling": 950
      },
      {
        "Manicure": 120
      },
      {
        "Pedicure": 100
      }
    ]
  }]);


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OutcomesComponent],
      imports: [MatDialogModule],
      providers: [
        {provide: AccountingService, useValue: {fetchOutcomesData: () => of(mockData)}},
        {provide: SpinnerService, useValue: {show: jest.fn(), hide: jest.fn()}},
        {provide: MatDialog, useValue: MatDialogRefMock},
        {provide: CONFIG, useValue: outcomesChartConfig},

      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutcomesComponent);
    component = fixture.componentInstance;
    accountingService = TestBed.inject(AccountingService);
    dialog = TestBed.inject(MatDialog);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render app-vertical-bar', () => {

    // given
    // when
    Object.defineProperty(component, 'resultData$', {value: mockData});
    // then
    fixture.detectChanges();

    const verticalBarElement = fixture.nativeElement.querySelector('app-vertical-bar');
    expect(verticalBarElement).toBeDefined();
  })

  it('should fetch incomes data on initialization', () => {
    // given
    jest.spyOn(accountingService, 'fetchOutcomesData');
    // when
    component.ngOnInit();
    // then
    expect(component.resultData$.subscribe(data => data)).toEqual((mockData.subscribe(data => data)));
  });

});
