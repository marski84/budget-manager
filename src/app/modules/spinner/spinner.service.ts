import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable()
export class SpinnerService {
  private loading = new BehaviorSubject<boolean>(false)
  readonly isLoading$ = this.loading.asObservable()

  private totalRequests = 0;
  private completedRequests = 0;

  constructor() {
  }

  show() {
    this.totalRequests++;
    this.loading.next(true);
  }

  hide() {
    this.completedRequests++;

    if (this.totalRequests === this.completedRequests) {
      this.loading.next(false);
    }
  }
}
