import {SpinnerService} from "./spinner.service";

describe('SpinnerService', () => {
  let spinnerService: SpinnerService;

  beforeEach(() => {
    spinnerService = new SpinnerService();
  });

  it('should start with isLoading$ set to false', () => {
    spinnerService.isLoading$.subscribe(isLoading => {
      expect(isLoading).toBe(false);
    });
  });

  it('should show spinner and update isLoading$', () => {
    spinnerService.show();

    spinnerService.isLoading$.subscribe(isLoading => {
      expect(isLoading).toBe(true);
    });
  });

  it('should hide spinner and update isLoading$', () => {
    spinnerService.show();
    spinnerService.hide();

    spinnerService.isLoading$.subscribe(isLoading => {
      expect(isLoading).toBe(false);
    });
  });

  it('should hide spinner only when all requests are completed', () => {
    spinnerService.show();
    spinnerService.show();
    spinnerService.hide();

    spinnerService.isLoading$.subscribe(isLoading => {
      expect(isLoading).toBe(true); // Still loading because there is one pending request
    });

    spinnerService.hide();

    spinnerService.isLoading$.subscribe(isLoading => {
      expect(isLoading).toBe(false); // No pending requests, so loading should be false
    });
  });
});
