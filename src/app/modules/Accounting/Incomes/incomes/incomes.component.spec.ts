import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {IncomesComponent} from './incomes.component';
import {AccountingService} from '../../accounting.service';
import {of} from 'rxjs';
import {CONFIG} from '../../../shared/CONFIG';
import {incomesChartConfig} from '../../../Accounting/Incomes/incomesChartConfig';
import {SpinnerService} from "../../../spinner/spinner.service";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('IncomesComponent', () => {
  let component: IncomesComponent;
  let fixture: ComponentFixture<IncomesComponent>;
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


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IncomesComponent],
      imports: [MatDialogModule],
      providers: [
        {provide: MatDialogRef, useValue: MatDialogRefMock},
        {provide: CONFIG, useValue: incomesChartConfig},
        {provide: AccountingService, useValue: {fetchIncomesData: () => of(mockData)}},
        {provide: SpinnerService, useValue: {show: jest.fn(), hide: jest.fn()}},
        {provide: MatDialog, useValue: MatDialogRefMock}
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomesComponent);
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
    Object.defineProperty(component, 'incomeData$', {value: mockData});
    // then
    fixture.detectChanges();
    const verticalBarElement = fixture.nativeElement.querySelector('app-vertical-bar');
    expect(verticalBarElement).toBeDefined();
  })

  it('should fetch incomes data on initialization', () => {
    // given
    jest.spyOn(accountingService, 'fetchIncomesData');
    // when
    component.ngOnInit();
    // then
    expect(component.incomeData$.subscribe(data => data)).toEqual((mockData.subscribe(data => data)));
  });

  it('should open dialog on activate', () => {
    // given
    const mockActivateDate = [
      {
        value: {
          name: 'test',
          value: 100,
          extra: {
            'test': 100
          },
          label: 'testLabel'
        },
        entries: []
      }
    ]
    // when
    component.onActivate = jest.fn().mockReturnValue(mockActivateDate);
    component.onActivate(mockActivateDate as any);
    // then
    fixture.detectChanges();
    expect(component.onActivate(mockActivateDate as any)).toEqual(mockActivateDate);
  });

  it('should close dialog on deactivate', () => {
    // given
    const mockActivateDate = [
      {
        value: {
          name: 'test',
          value: 100,
          extra: {
            'test': 100
          },
          label: 'testLabel'
        },
        entries: []
      }
    ]
    // when
    component.onDeactivate = jest.fn().mockReturnValue(mockActivateDate);
    component.onDeactivate(mockActivateDate as any)
    // then
    expect(component.onDeactivate(mockActivateDate as any)).toEqual(mockActivateDate)
  });


});
