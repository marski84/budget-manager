import {TestBed} from '@angular/core/testing';
import {AccountingService} from '../Accounting/accounting.service';
import {DataFormatter} from '../Accounting/DataFormatter';
import {SpinnerService} from '../spinner/spinner.service';
import {AbstractBarDataInterface} from "../Accounting/models/abstractBarData.interface";
import {incomesData} from "../Accounting/data/incomes";
import {finalize} from "rxjs";
import {outcomesData} from "../Accounting/data/outcomes";

describe('AccountingService', () => {
  let accountingService: AccountingService;
  let spinnerService: SpinnerService;

  const mockSpinnerService = {
    show: jest.fn(),
    hide: jest.fn(),
  };


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AccountingService,
        {provide: SpinnerService, useValue: mockSpinnerService},
      ],
    });
    accountingService = new AccountingService(new SpinnerService())

  });

  it('should be created', () => {
    expect(accountingService).toBeTruthy();
  });

  it('should fetch incomes data', (done) => {
    // given
    const expectedData: AbstractBarDataInterface[] =
      DataFormatter.formatIncomesData(incomesData);
    // when
    accountingService
      .fetchIncomesData()
      .pipe(finalize(() => expect(spinnerService.hide).toHaveBeenCalled()))
      .subscribe((data) => {
        // then
        expect(data).toEqual(expectedData);
        done();
      });


  });

  it('should fetch outcomes data', (done) => {
    // given
    const expectedData: AbstractBarDataInterface[] =
      DataFormatter.formatOutcomeData(outcomesData);
    // when
    accountingService
      .fetchOutcomesData().subscribe((data) => {
      // then
      expect(data).toEqual(expectedData);
      done();
    });

  });

  it('should register new outcome', () => {
    // given
    const spy = jest.spyOn(accountingService, 'registerNewOutcome');
    const data = {
      expenseAmount: '1000',
      month: 'Test',
      outcomeType: 'test',
    };
    // when
    accountingService.registerNewOutcome(data);
    // then
    expect(spy).toReturnWith(data);
  });
});
