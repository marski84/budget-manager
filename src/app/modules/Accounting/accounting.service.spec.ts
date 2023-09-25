import {AccountingService} from '../../modules/Accounting/accounting.service';
import {SpinnerService} from '../../modules/spinner/spinner.service';

describe('AccountingService', () => {
  let accountingService: AccountingService;
  let spinnerService: SpinnerService;

  beforeEach(() => {
    spinnerService = new SpinnerService();
    accountingService = new AccountingService(spinnerService);
  });

  it('should fetch incomes data successfully', (done) => {
    const expectedData = [{id: 1, name: 'Income 1', value: 100, extra: []},
      {id: 2, name: 'Income 2', value: 200, extra: []}];

    accountingService.fetchIncomesData().subscribe((data) => {
      // @ts-ignore
      setTimeout(
        () => {
          expect(data).toEqual(expectedData);
          expect(spinnerService.isLoading$).toBeFalsy();
          done();
        }, 6000
      )

    });
  });

  it('should register new outcome', () => {
    const outcomeData = {
      id: 1, name: 'New Outcome', expenseAmount: '100',
      month: 'March', outcomeType: 'test'
    };

    accountingService.registerNewOutcome(outcomeData);

    // You can add additional assertions here based on your requirements
    expect(console.log).toHaveBeenCalledWith(outcomeData);
  });
});
