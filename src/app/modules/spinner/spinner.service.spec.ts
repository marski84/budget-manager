import {SpinnerService} from "./spinner.service";

describe('SpinnerService', () => {
  let spinnerService: SpinnerService;

  beforeEach(() => {
    spinnerService = new SpinnerService();
  });

  it('should create spinnerService', () => {
    expect(spinnerService).toBeTruthy()
  });
});


