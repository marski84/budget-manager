import {TestBed} from '@angular/core/testing';
import {AccountingService} from '../Accounting/accounting.service';
import {incomesData} from "../Accounting/data/incomes";
import {outcomesData} from "../Accounting/data/outcomes";
import {DataFormatter} from "../Accounting/DataFormatter";
import {AbstractBarDataInterface} from "../Accounting/models/abstractBarData.interface";
import {SpinnerService} from '../spinner/spinner.service';


describe('AccountingService', () => {
  let service: AccountingService;
  let spinnerService: SpinnerService;


  const mockSpinnerService = {
    show: jest.fn(),
    hide: jest.fn(),
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AccountingService,
        {provide: SpinnerService, useValue: mockSpinnerService}
      ],
    });
    service = TestBed.inject(AccountingService);
    spinnerService = TestBed.inject(SpinnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch incomes data', (done) => {
    // given
    const expectedData: AbstractBarDataInterface[] = DataFormatter.formatIncomesData(incomesData);
    const spy = jest.spyOn(spinnerService, 'show');
    // when
    service.fetchIncomesData().subscribe((data) => {
      // then
      expect(data).toEqual(expectedData);
      console.log(expectedData)
      expect(spy).toHaveBeenCalled();
      done();
    });
  });

  it('should fetch outcomes data', (done) => {
    // given
    const expectedData: AbstractBarDataInterface[] = DataFormatter.formatOutcomeData(outcomesData);
    const spy = jest.spyOn(spinnerService, 'show');
    // when
    service.fetchOutcomesData().subscribe((data) => {
      // then
      expect(data).toEqual(expectedData);
      expect(spy).toHaveBeenCalled();
      done();
    });
  });

  it('should register new outcome', () => {
    // given
    const spy = jest.spyOn(service, 'registerNewOutcome');
    const data = {
      expenseAmount: '1000',
      month: 'Test',
      outcomeType: 'test'
    };
    // when
    service.registerNewOutcome(data);
    // then
    expect(spy).toReturnWith(data)
  });
});
