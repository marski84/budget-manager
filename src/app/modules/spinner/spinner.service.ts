import { Injectable } from '@angular/core';
import { BehaviorSubject, map, scan } from 'rxjs';

@Injectable()
export class SpinnerService {
  private loading = new BehaviorSubject<number>(0); //{key: boolean}
  readonly isLoading$ = this.loading.pipe(
    scan((count, value) => count + value, 0),
    map((count) => count > 0)
  );

  constructor() {}

  show() {
    // key
    this.loading.next(1);
  }

  hide() {
    // key
    this.loading.next(-1);
  }
}
