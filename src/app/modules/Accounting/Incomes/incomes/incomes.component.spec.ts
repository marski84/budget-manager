import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MatDialog, MatDialogModule, MatDialogRef,} from '@angular/material/dialog';
import {IncomesComponent} from './incomes.component';
import {AccountingService} from '../../accounting.service';
import {of} from 'rxjs';
import {CONFIG} from '../../../shared/CONFIG';
import {incomesChartConfig} from '../../../Accounting/Incomes/incomesChartConfig';
import {SpinnerService} from '../../../spinner/spinner.service';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('IncomesComponent', () => {
  let component: IncomesComponent;
  let fixture: ComponentFixture<IncomesComponent>;
  const dialogMock = {
    open: jest.fn(),
    close: jest.fn(),
  };

  const matDialogRefMock = {
    close: jest.fn(),
    open: jest.fn()
  }

  const mockData = of([
    {
      name: 'January',
      value: 1490,
      extra: [
        {
          Pedicure: 100,
        },
        {
          Manicure: 120,
        },
        {
          Pedicure: 100,
        },
        {
          Schooling: 950,
        },
        {
          Manicure: 120,
        },
        {
          Pedicure: 100,
        },
      ],
    },
  ]);

  const accountingServiceMock = {fetchIncomesData: jest.fn()};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IncomesComponent],
      imports: [MatDialogModule],
      providers: [
        {provide: MatDialogRef, useValue: matDialogRefMock},
        {provide: MatDialog, useValue: dialogMock},
        {provide: CONFIG, useValue: incomesChartConfig},
        {provide: AccountingService, useValue: accountingServiceMock},
        {
          provide: SpinnerService,
          useValue: {show: jest.fn(), hide: jest.fn()},
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(IncomesComponent);
    component = fixture.componentInstance;
    // accountingService = TestBed.inject(AccountingService);
    fixture.detectChanges();

    jest.clearAllMocks();

  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render app-vertical-bar', () => {
    // given
    accountingServiceMock.fetchIncomesData.mockReturnValue(
      of({value: mockData})
    );

    // when
    fixture.detectChanges();
    const verticalBarElement =
      fixture.nativeElement.querySelector('app-vertical-bar');

    // then
    expect(verticalBarElement).toBeDefined();
  });


  it('should onActivate call dialog open', () => {
    // given
    const mockActivateDate = {
      value:
        {
          name: 'test',
          value:
            100,
          extra:
            {
              test: 100,
            },
          label: 'testLabel',
        }
      ,
    };


    // when
    component.onActivate(mockActivateDate as any);

    // then
    expect(dialogMock.open).toBeCalled()
  })

  it('should onDeactivate call close when event is present', () => {
    // given
    const mockActivateDate = [
      {
        value: {
          name: 'test',
          value: 100,
          extra: {
            test: 100,
          },
          label: 'testLabel',
        },
        entries: [],
      },
    ];
    // when
    component.onDeactivate(mockActivateDate as any);
    // then
    expect(matDialogRefMock).toBeCalled();
  });

  it('should onDeactivate not call close when event is missing', () => {
    // when
    component.onDeactivate([] as any);
    // then
    expect(matDialogRefMock).not.toBeCalled();
  });
});


describe('on init test', () => {
  let component: IncomesComponent;
  let fixture: ComponentFixture<IncomesComponent>;
  const accountingServiceMock = {fetchIncomesData: jest.fn()};


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IncomesComponent],
      imports: [MatDialogModule],
      providers: [
        {provide: MatDialogRef, useValue: {}},
        {provide: MatDialog, useValue: {}},
        {provide: CONFIG, useValue: incomesChartConfig},
        {provide: AccountingService, useValue: accountingServiceMock},
        {
          provide: SpinnerService,
          useValue: {show: jest.fn(), hide: jest.fn()},
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();


    jest.clearAllMocks();

  });

  it('it should call fetchIncomesData on Init', () => {
    fixture = TestBed.createComponent(IncomesComponent);
    component = fixture.componentInstance;

    // accountingService = TestBed.inject(AccountingService);
    const spy = jest.spyOn(accountingServiceMock, 'fetchIncomesData')
    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  })

})
